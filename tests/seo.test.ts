import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { generateMetadata as medisapienceMetadata } from "@/app/[lang]/work/medisapience/page";
import { generateMetadata as cemMetadata } from "@/app/[lang]/work/cem-nicaragua/page";
import { generateMetadata as rootMetadata } from "@/app/[lang]/layout";
import { locales } from "@/content/i18n";

const params = (lang: string) => ({ params: Promise.resolve({ lang }) });

describe("preview discovery controls", () => {
  it("disallows crawlers while content is mock", () => {
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
  });

  it("lists every public route in every language", () => {
    const paths = sitemap().map((entry) => new URL(entry.url).pathname);
    expect(paths).toEqual([
      "/en",
      "/es",
      "/en/work/medisapience",
      "/es/work/medisapience",
      "/en/work/cem-nicaragua",
      "/es/work/cem-nicaragua",
      "/en/work/credora",
      "/es/work/credora",
      "/en/work/kiseki-no-oto",
      "/es/work/kiseki-no-oto",
    ]);
  });

  it("names both translations on every sitemap entry", () => {
    for (const entry of sitemap()) {
      const languages = entry.alternates?.languages ?? {};
      expect(Object.keys(languages).sort()).toEqual([...locales].sort());
    }
  });

  it("gives each case study its own social title and description", async () => {
    const medisapience = await medisapienceMetadata(params("en") as never);
    const cem = await cemMetadata(params("en") as never);

    expect(medisapience.openGraph).toMatchObject({
      title: "MediSapience case study — Henry Gonzalez",
      description: expect.stringContaining("medical learning"),
    });
    expect(cem.openGraph).toMatchObject({
      title: "CEM Digital case study — Henry Gonzalez",
      description: expect.stringContaining("CEM Nicaragua"),
    });
    expect(medisapience.twitter).toMatchObject({ card: "summary_large_image" });
    expect(cem.twitter).toMatchObject({ card: "summary_large_image" });
  });

  it("writes the Spanish metadata in Spanish, not the English strings", async () => {
    const medisapience = await medisapienceMetadata(params("es") as never);

    expect(medisapience.title).toBe("Caso de estudio: MediSapience");
    expect(medisapience.description).toMatch(/plataforma en producción/i);
    expect(medisapience.openGraph).toMatchObject({ locale: "es_ES" });
  });

  it("canonicalises each page to its own language and cross-links the other", async () => {
    for (const locale of locales) {
      const root = await rootMetadata(params(locale) as never);
      expect(root.alternates?.canonical).toBe(`/${locale}`);
      expect(root.alternates?.languages).toMatchObject({
        en: "/en",
        es: "/es",
        "x-default": "/en",
      });

      const study = await medisapienceMetadata(params(locale) as never);
      expect(study.alternates?.canonical).toBe(`/${locale}/work/medisapience`);
      expect(study.alternates?.languages).toMatchObject({
        en: "/en/work/medisapience",
        es: "/es/work/medisapience",
      });
    }
  });

  it("keeps the whole site out of the index while content is mock, in both languages", async () => {
    for (const locale of locales) {
      const root = await rootMetadata(params(locale) as never);
      expect(root.robots).toMatchObject({ index: false, follow: false });
    }
  });
});
