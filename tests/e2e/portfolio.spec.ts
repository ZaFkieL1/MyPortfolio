import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", heading: "I build digital products businesses can depend on." },
  { path: "/work/medisapience", heading: /one platform for medical question banks and the team behind them/i },
  { path: "/work/cem-nicaragua", heading: "CEM Digital" },
];

for (const route of routes) {
  test(`${route.path} is accessible and does not overflow`, async ({ page }) => {
    // Audit the resting state. Scroll reveals fade content in as it enters the viewport, and a
    // block caught mid-reveal at the fold would be measured at partial opacity.
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route.path);
    await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
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

test("mobile menu supports open, close, and escape", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation behavior");
  await page.goto("/");
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

test("MediSapience diagrams render and remain keyboard accessible on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/work/medisapience");

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

test("critical layouts stay inside the viewport across the supported width matrix", async ({
  page,
}, testInfo) => {
  test.setTimeout(120_000);
  test.skip(testInfo.project.name !== "desktop-chromium", "Runs once across the shared width matrix");

  const widths = [320, 390, 480, 768, 1024, 1280, 1440, 1536, 1920];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route.path);
      await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(dimensions.content, `${route.path} overflows at ${width}px`).toBeLessThanOrEqual(
        dimensions.viewport,
      );
    }
  }
});

test("reduced motion removes nonessential animation time", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Runs once for the shared CSS contract");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

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
  test.skip(testInfo.project.name !== "desktop-chromium", "Runs once for shared semantics");

  for (const route of routes) {
    await page.goto(route.path);
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();

    const unnamedLinks = await page.locator("a[href]").evaluateAll((links) =>
      links.filter((link) => !link.textContent?.trim() && !link.getAttribute("aria-label")).length,
    );
    expect(unnamedLinks, `${route.path} contains an unnamed link`).toBe(0);
  }
});

test("essential content reflows at 200 and 400 percent equivalents", async ({ page }, testInfo) => {
  test.setTimeout(60_000);
  test.skip(testInfo.project.name !== "desktop-chromium", "Runs once across equivalent CSS widths");

  for (const width of [640, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route.path);
      await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
      await expect(page.locator("#main-content")).toBeVisible();
      await expect(
        route.path === "/"
          ? page.getByRole("link", { name: /start a project/i }).last()
          : page.getByRole("link", { name: /discuss a similar product/i }),
      ).toBeVisible();

      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
    }
  }
});

test("capture final review surfaces", async ({ page }, testInfo) => {
  test.setTimeout(60_000);
  test.skip(testInfo.project.name !== "desktop-chromium", "Capture once with explicit viewports");
  const reviewDirectory = path.join(process.cwd(), ".impeccable", "review");
  await mkdir(reviewDirectory, { recursive: true });

  for (const viewport of [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    for (const route of routes) {
      await page.goto(route.path);
      await page.screenshot({
        path: path.join(
          reviewDirectory,
          route.path === "/"
            ? `${viewport.name}.png`
            : `${route.path.split("/").at(-1)}-${viewport.name}.png`,
        ),
        fullPage: true,
        animations: "disabled",
      });
    }
  }
});
