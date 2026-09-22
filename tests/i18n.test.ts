import { describe, expect, it } from "vitest";
import {
  defaultLocale,
  isLocale,
  localePath,
  locales,
  matchLocale,
  stripLocale,
} from "@/content/i18n";
import { getUi } from "@/content/ui";

describe("language negotiation", () => {
  it("takes the browser's first understood language", () => {
    expect(matchLocale("es-NI,es;q=0.9,en;q=0.8")).toBe("es");
    expect(matchLocale("en-US,en;q=0.9")).toBe("en");
    expect(matchLocale("es")).toBe("es");
  });

  it("matches any Spanish region, not just the exact tag", () => {
    for (const header of ["es-419", "es-MX", "es-ES", "ES-NI"]) {
      expect(matchLocale(header)).toBe("es");
    }
  });

  it("respects quality weights rather than the written order", () => {
    expect(matchLocale("en;q=0.2,es;q=0.9")).toBe("es");
    expect(matchLocale("es;q=0.3,en;q=0.7")).toBe("en");
    // A zero weight is a refusal, not a preference.
    expect(matchLocale("es;q=0,en;q=0.5")).toBe("en");
  });

  it("falls back to English for anything it does not publish", () => {
    expect(matchLocale("fr-FR,fr;q=0.9,de;q=0.8")).toBe(defaultLocale);
    expect(matchLocale("*")).toBe(defaultLocale);
    expect(matchLocale("")).toBe(defaultLocale);
    expect(matchLocale(null)).toBe(defaultLocale);
    expect(matchLocale(undefined)).toBe(defaultLocale);
    expect(matchLocale("garbage;;;q=x")).toBe(defaultLocale);
  });

  it("prefers a language it publishes over an earlier one it does not", () => {
    expect(matchLocale("de-DE,de;q=0.9,es;q=0.5")).toBe("es");
  });
});

describe("locale paths", () => {
  it("prefixes a route and keeps its hash", () => {
    expect(localePath("es", "/")).toBe("/es");
    expect(localePath("es", "/work/credora")).toBe("/es/work/credora");
    expect(localePath("en", "/#contact")).toBe("/en#contact");
    expect(localePath("es", "/work/credora#top")).toBe("/es/work/credora#top");
  });

  it("re-prefixes rather than stacking a second language on a path", () => {
    expect(localePath("es", "/en/work/credora")).toBe("/es/work/credora");
    expect(localePath("en", "/es")).toBe("/en");
  });

  it("leaves external and relative destinations alone", () => {
    expect(localePath("es", "https://example.org/x")).toBe("https://example.org/x");
    expect(localePath("es", "mailto:someone@example.org")).toBe("mailto:someone@example.org");
    expect(localePath("es", "#contact")).toBe("#contact");
  });

  it("strips a language back off, which is how the switcher stays on the page", () => {
    expect(stripLocale("/es/work/credora")).toBe("/work/credora");
    expect(stripLocale("/en")).toBe("/");
    expect(stripLocale("/")).toBe("/");
    // A path that never had one is returned unchanged.
    expect(stripLocale("/work/credora")).toBe("/work/credora");
  });

  it("recognises exactly the languages the site publishes", () => {
    expect(locales.filter(isLocale)).toEqual([...locales]);
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("EN")).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });
});

describe("interface strings", () => {
  it("translates every leaf rather than leaving an English one behind", () => {
    const en = getUi("en");
    const es = getUi("es");

    // Words that are the same in both languages by design — brand-neutral or borrowed.
    const shared = new Set(["Web Push", "Zoom"]);

    const walk = (a: unknown, b: unknown, path: string) => {
      if (typeof a === "string") {
        if (a.trim() && !shared.has(a)) {
          expect(b, `${path} was left in English`).not.toBe(a);
        }
        return;
      }
      if (Array.isArray(a)) {
        expect(Array.isArray(b), `${path} changed shape`).toBe(true);
        expect((b as unknown[]).length, `${path} changed length`).toBe(a.length);
        a.forEach((item, index) => walk(item, (b as unknown[])[index], `${path}[${index}]`));
        return;
      }
      if (a && typeof a === "object") {
        for (const key of Object.keys(a)) {
          // `href` and `key` are routing, not copy; they must stay identical.
          if (key === "href" || key === "key" || key === "pick") {
            expect((b as Record<string, unknown>)[key]).toEqual(
              (a as Record<string, unknown>)[key],
            );
            continue;
          }
          walk(
            (a as Record<string, unknown>)[key],
            (b as Record<string, unknown>)[key],
            `${path}.${key}`,
          );
        }
      }
      // Functions are compared by what they produce, below.
    };

    walk(en, es, "ui");
  });

  it("builds the same-shaped sentences from its string functions", () => {
    expect(getUi("en").nav.home("Henry")).toBe("Henry, home");
    expect(getUi("es").nav.home("Henry")).toBe("Henry, inicio");
    expect(getUi("es").language.switchTo("English")).toBe("Cambiar a English");
    expect(getUi("es").sideProject.stackLead("SaaS", "En desarrollo")).toBe(
      "SaaS, en desarrollo.",
    );
  });
});
