import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { expect, test } from "@playwright/test";

type Route = {
  /** The route without a language prefix; every check visits it in both languages. */
  path: string;
  heading: string | RegExp;
  /** The page's own primary call to action — the one that has to survive reflow. */
  action: RegExp;
};

const english: Route[] = [
  {
    path: "/",
    heading: "I build digital products businesses can depend on.",
    action: /start a project/i,
  },
  {
    path: "/work/medisapience",
    heading: /one platform for medical question banks and the team behind them/i,
    action: /discuss a similar product/i,
  },
  {
    path: "/work/cem-nicaragua",
    heading: /one app for a medical course that ran on five platforms/i,
    action: /discuss a similar product/i,
  },
  { path: "/work/credora", heading: "Credora", action: /let's talk about your project/i },
  { path: "/work/kiseki-no-oto", heading: "Kiseki no Oto", action: /visit the site/i },
];

const spanish: Route[] = [
  {
    path: "/",
    heading: "Construyo productos digitales en los que una empresa puede confiar.",
    action: /empezar un proyecto/i,
  },
  {
    path: "/work/medisapience",
    heading: /una sola plataforma para los bancos de preguntas médicas/i,
    action: /conversemos sobre un producto así/i,
  },
  {
    path: "/work/cem-nicaragua",
    heading: /una sola app para un curso de medicina que corría en cinco plataformas/i,
    action: /conversemos sobre un producto así/i,
  },
  { path: "/work/credora", heading: "Credora", action: /hablemos de tu proyecto/i },
  { path: "/work/kiseki-no-oto", heading: "Kiseki no Oto", action: /visitar el sitio/i },
];

const byLocale = { en: english, es: spanish } as const;
const locales = ["en", "es"] as const;

/** Spanish runs longer than English, so every layout guarantee is checked in both. */
const allRoutes = locales.flatMap((locale) =>
  byLocale[locale].map((route) => ({ ...route, locale, url: `/${locale}${route.path === "/" ? "" : route.path}` })),
);

for (const route of allRoutes) {
  test(`${route.url} is accessible and does not overflow`, async ({ page }) => {
    // Audit the resting state. Scroll reveals fade content in as it enters the viewport, and a
    // block caught mid-reveal at the fold would be measured at partial opacity.
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route.url);
    await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", route.locale);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);

    const width = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(width.content).toBeLessThanOrEqual(width.viewport);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

test.describe("language negotiation", () => {
  test("sends an unprefixed visit to the browser's language", async ({ browser }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chromium", "Runs once for the shared proxy");

    // `locale` is what actually sets Chromium's Accept-Language; an `extraHTTPHeaders`
    // entry for the same header is overridden by it, so the browser's own setting is used.
    for (const [locale, expected] of [
      ["es-NI", "/es"],
      ["en-GB", "/en"],
      // A language the site does not publish falls back to English rather than failing.
      ["fr-FR", "/en"],
    ] as const) {
      const context = await browser.newContext({ locale });
      const page = await context.newPage();
      await page.goto("/");
      await expect(page).toHaveURL(new RegExp(`${expected}$`));
      // A deep link keeps its path through the redirect.
      await page.goto("/work/credora");
      await expect(page).toHaveURL(new RegExp(`${expected}/work/credora$`));
      await context.close();
    }
  });

  test("the switcher changes language, stays on the page, and is remembered", async ({
    browser,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chromium", "Runs once for the shared control");

    // An English browser, so anything Spanish below is the switcher's doing.
    const context = await browser.newContext({ locale: "en-US" });
    const page = await context.newPage();

    await page.goto("/work/kiseki-no-oto");
    await expect(page).toHaveURL(/\/en\/work\/kiseki-no-oto$/);

    await page.getByRole("link", { name: /switch to español/i }).click();
    await expect(page).toHaveURL(/\/es\/work\/kiseki-no-oto$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.getByRole("link", { name: /visitar el sitio/i })).toBeVisible();

    // The choice outlives the page: an unprefixed visit now lands in Spanish.
    await page.goto("/");
    await expect(page).toHaveURL(/\/es$/);

    // And it can be reversed the same way.
    await page.getByRole("link", { name: /cambiar a english/i }).click();
    await expect(page).toHaveURL(/\/en$/);
    await page.goto("/work/credora");
    await expect(page).toHaveURL(/\/en\/work\/credora$/);

    await context.close();
  });

  test("every page points at its translation", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chromium", "Runs once for the shared metadata");

    for (const route of english) {
      const url = `/en${route.path === "/" ? "" : route.path}`;
      await page.goto(url);
      const expected = `/es${route.path === "/" ? "" : route.path}`;
      await expect(page.locator(`link[rel="alternate"][hreflang="es"]`)).toHaveAttribute(
        "href",
        new RegExp(`${expected.replace(/\//g, "\\/")}$`),
      );
      await expect(page.locator(`link[rel="canonical"]`)).toHaveAttribute(
        "href",
        new RegExp(`${url.replace(/\//g, "\\/")}$`),
      );
    }
  });
});

test("mobile menu supports open, close, and escape", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation behavior");
  await page.goto("/en");
  await page.waitForFunction(() => document.body.dataset.menuOpen === "false");
  const trigger = page.getByRole("button", { name: "Open menu" });
  await trigger.click();
  await expect(page.getByRole("dialog", { name: "Site menu" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();
  const menuResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(menuResults.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Site menu" })).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("the Spanish mobile menu is labelled in Spanish", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation behavior");
  await page.goto("/es");
  await page.waitForFunction(() => document.body.dataset.menuOpen === "false");
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await expect(page.getByRole("dialog", { name: "Menú del sitio" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Cerrar menú" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Menú del sitio" })).toBeHidden();
});

/*
 * The brand mark goes home, and has to land at the top. `scroll-behavior: smooth` is
 * global, and Next 16 only forces the instant scroll-to-top on navigation when the root
 * layout carries `data-scroll-behavior="smooth"`; without it the home page arrives
 * mid-article. Checked in both languages, because the mark links to the home page of its
 * own locale and is named in that language.
 */
for (const [locale, homeName] of [
  ["en", /, home$/],
  ["es", /, inicio$/],
] as const) {
  test(`the ${locale} brand mark returns to the top of the home page from a scrolled case study`, async ({
    page,
  }) => {
    await page.goto(`/${locale}/work/medisapience`);
    await page.evaluate(() =>
      window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }),
    );
    await page.getByRole("link", { name: homeName }).click();
    await page.waitForURL((url) => url.pathname === `/${locale}`);
    await expect.poll(() => page.evaluate(() => window.scrollY), { timeout: 3_000 }).toBe(0);
    await page.waitForTimeout(800);
    expect(await page.evaluate(() => window.scrollY)).toBe(0);
  });
}

test("MediSapience diagrams render and remain keyboard accessible on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en/work/medisapience");

  for (const name of ["Server-side session assembly", "MediSapience system architecture"]) {
    const figure = page.getByRole("figure", { name });
    await expect(figure.locator("svg")).toBeVisible();
    await expect(figure.getByRole("list")).toBeAttached();

    const scrollRegion = figure.getByRole("region", { name: `${name} visual diagram` });
    await expect(scrollRegion).toHaveAttribute("tabindex", "0");
    await scrollRegion.focus();
    await expect(scrollRegion).toBeFocused();
  }
});

test("Spanish diagrams render with their own labels", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es/work/medisapience");

  for (const name of ["Armado de la sesión en el servidor", "Arquitectura del sistema MediSapience"]) {
    const figure = page.getByRole("figure", { name });
    await expect(figure.locator("svg")).toBeVisible();
    const scrollRegion = figure.getByRole("region", { name: `Diagrama de ${name}` });
    await expect(scrollRegion).toHaveAttribute("tabindex", "0");
  }
});

test("critical layouts stay inside the viewport across the supported width matrix", async ({
  page,
}, testInfo) => {
  test.setTimeout(240_000);
  test.skip(testInfo.project.name !== "desktop-chromium", "Runs once across the shared width matrix");

  const widths = [320, 390, 480, 768, 1024, 1280, 1440, 1536, 1920];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of allRoutes) {
      await page.goto(route.url);
      await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(dimensions.content, `${route.url} overflows at ${width}px`).toBeLessThanOrEqual(
        dimensions.viewport,
      );
    }
  }
});

test("reduced motion removes nonessential animation time", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Runs once for the shared CSS contract");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");

  const styles = await page.locator(".hero__copy").evaluate((element) => {
    const computed = getComputedStyle(element);
    return {
      animationDuration: computed.animationDuration,
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    };
  });

  expect(Number.parseFloat(styles.animationDuration)).toBeLessThanOrEqual(0.00001);
  expect(styles.scrollBehavior).toBe("auto");
});

test("keyboard entry and link purpose remain explicit on every route", async ({ page }, testInfo) => {
  test.setTimeout(120_000);
  test.skip(testInfo.project.name !== "desktop-chromium", "Runs once for shared semantics");

  const skipLink = { en: "Skip to content", es: "Saltar al contenido" };

  for (const route of allRoutes) {
    await page.goto(route.url);
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: skipLink[route.locale] })).toBeFocused();

    const unnamedLinks = await page.locator("a[href]").evaluateAll((links) =>
      links.filter((link) => !link.textContent?.trim() && !link.getAttribute("aria-label")).length,
    );
    expect(unnamedLinks, `${route.url} contains an unnamed link`).toBe(0);
  }
});

test("essential content reflows at 200 and 400 percent equivalents", async ({ page }, testInfo) => {
  test.setTimeout(120_000);
  test.skip(testInfo.project.name !== "desktop-chromium", "Runs once across equivalent CSS widths");

  for (const width of [640, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of allRoutes) {
      await page.goto(route.url);
      await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
      await expect(page.locator("#main-content")).toBeVisible();
      await expect(page.getByRole("link", { name: route.action }).last()).toBeVisible();

      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
    }
  }
});

test("capture final review surfaces", async ({ page }, testInfo) => {
  test.setTimeout(120_000);
  test.skip(testInfo.project.name !== "desktop-chromium", "Capture once with explicit viewports");
  const reviewDirectory = path.join(process.cwd(), ".impeccable", "review");
  await mkdir(reviewDirectory, { recursive: true });

  for (const viewport of [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    for (const route of allRoutes) {
      await page.goto(route.url);
      // English keeps the existing filenames so the review set stays comparable;
      // Spanish is captured alongside it with a suffix.
      const base = route.path === "/" ? viewport.name : `${route.path.split("/").at(-1)}-${viewport.name}`;
      await page.screenshot({
        path: path.join(reviewDirectory, route.locale === "en" ? `${base}.png` : `${base}-es.png`),
        fullPage: true,
        animations: "disabled",
      });
    }
  }
});
