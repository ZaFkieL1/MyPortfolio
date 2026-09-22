import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Home from "@/app/[lang]/page";
import type { Locale } from "@/content/i18n";

/**
 * The page is an async server component now that the language comes from the route, so
 * each test awaits it and renders what it returned.
 */
async function renderHome(lang: Locale = "en") {
  render(await Home({ params: Promise.resolve({ lang }), searchParams: Promise.resolve({}) }));
}

describe("Home page", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("leads with the product-engineering proposition and real work", async () => {
    await renderHome();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /digital products businesses can depend on/i,
      }),
    ).toBeVisible();

    const work = document.querySelector("#work");
    expect(work).not.toBeNull();
    expect(within(work as HTMLElement).getByRole("heading", { name: "MediSapience" })).toBeVisible();
    expect(within(work as HTMLElement).getByRole("heading", { name: "CEM Digital" })).toBeVisible();
  });

  it("contains commercial services, process, about, and contact sections", async () => {
    await renderHome();

    for (const id of ["services", "process", "about", "contact"]) {
      expect(document.querySelector(`#${id}`)).not.toBeNull();
    }
    expect(screen.getByRole("heading", { name: /what i build/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /have a product in mind/i })).toBeVisible();
  });

  it("ranks the two case studies above the two described projects", async () => {
    await renderHome();

    const work = document.querySelector("#work") as HTMLElement;

    // Tier one keeps the case-study link and now names the live product.
    for (const [name, host] of [
      ["MediSapience", "medisapience.com"],
      ["CEM Digital", "cemnicaragua.com"],
    ]) {
      expect(within(work).getByRole("heading", { level: 3, name })).toBeVisible();
      expect(within(work).getByRole("link", { name: host })).toBeVisible();
    }
    expect(within(work).getAllByRole("link", { name: /view case study/i })).toHaveLength(2);

    // One shelf: four projects numbered in a single run, no second section heading.
    expect(within(work).getAllByRole("heading", { level: 3 }).map((h) => h.textContent)).toEqual([
      "MediSapience",
      "CEM Digital",
      "Credora",
      "Kiseki no Oto",
    ]);
    for (const index of ["01", "02", "03", "04"]) {
      expect(within(work).getByText(index)).toBeVisible();
    }
    // 03 and 04 are described, not written up: no case study to open.
    expect(within(work).queryByRole("link", { name: /credora/i })).toBeNull();
  });

  it("says where each described project can be seen, or why it cannot", async () => {
    await renderHome();
    const work = document.querySelector("#work") as HTMLElement;

    // The live site sits beside the category, not instead of it.
    expect(within(work).getByText("Net-label website")).toBeVisible();
    expect(within(work).getByRole("link", { name: /kiseki-no-oto\.com/ })).toHaveAttribute(
      "href",
      "https://kiseki-no-oto.com",
    );
    expect(within(work).getByRole("link", { name: /source code/i })).toHaveAttribute(
      "href",
      "https://github.com/ZaFkieL1/Kiseki-No-Oto-Website",
    );

    // Credora's repositories are private, so the section says so instead of linking.
    expect(within(work).getByText(/repositories are private/i)).toBeVisible();
    expect(within(work).getAllByRole("link", { name: /source code/i })).toHaveLength(1);

    // "View screenshots" is gated on captures existing in public/work, so it can never
    // open an empty page. Kiseki no Oto has them; Credora's are still pending.
    const screenshotLinks = within(work).getAllByRole("link", { name: /view screenshots/i });
    expect(screenshotLinks).toHaveLength(1);
    expect(screenshotLinks[0]).toHaveAttribute("href", "/en/work/kiseki-no-oto");
  });

  it("introduces Henry without an image slot to fill", async () => {
    await renderHome();

    const about = document.querySelector("#about") as HTMLElement;
    expect(within(about).getByRole("heading", { name: /hey, i’m henry/i })).toBeVisible();
    // The portrait card is gone; nothing may advertise a pending image.
    expect(screen.queryByText(/portrait pending/i)).toBeNull();
    expect(about.querySelector("img")).toBeNull();

    for (const label of ["Based in", "Working with", "Focus", "Elsewhere"]) {
      expect(within(about).getByText(label)).toBeVisible();
    }
    expect(within(about).getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/henry-gonzalez-a20258268/",
    );
    expect(within(about).getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/ZaFkieL1",
    );
  });

  it("labels preview media and does not render fabricated testimonials", async () => {
    await renderHome();

    expect(screen.getAllByText(/illustrative product ui/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("region", { name: /testimonials/i })).toBeNull();
  });
});

describe("Home page in Spanish", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("renders the same page with no English left in the chrome or the copy", async () => {
    await renderHome("es");

    expect(
      screen.getByRole("heading", { level: 1, name: /productos digitales/i }),
    ).toBeVisible();
    expect(screen.getByRole("heading", { name: /lo que construyo/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /de la idea a producción/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /hola, soy henry/i })).toBeVisible();

    // The illustration is labelled in Spanish too, not left as an English caption.
    expect(screen.getAllByText(/interfaz ilustrativa/i).length).toBeGreaterThan(0);
    expect(screen.queryByText(/illustrative product ui/i)).toBeNull();
    expect(screen.queryByRole("link", { name: /view case study/i })).toBeNull();
  });

  it("keeps every internal link inside the Spanish tree", async () => {
    await renderHome("es");
    const work = document.querySelector("#work") as HTMLElement;

    for (const link of within(work).getAllByRole("link", { name: /ver el caso de estudio/i })) {
      expect(link.getAttribute("href")).toMatch(/^\/es\/work\//);
    }
    expect(within(work).getByRole("link", { name: /ver capturas/i })).toHaveAttribute(
      "href",
      "/es/work/kiseki-no-oto",
    );
  });
});
