import type { MetadataRoute } from "next";
import { locales, localePath } from "@/content/i18n";
import { absoluteUrl, publicRoutes } from "@/content/site";

/**
 * Every page in every language, each entry naming its translations. The `alternates`
 * block is what tells a crawler that `/en/work/credora` and `/es/work/credora` are one
 * page in two languages rather than two pages competing for the same query.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.flatMap((route, index) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, route)),
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((candidate) => [candidate, absoluteUrl(localePath(candidate, route))]),
        ),
      },
    })),
  );
}
