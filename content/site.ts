import { locales, localePath, type Locale } from "./i18n";

/**
 * The public origin, used for `metadataBase`, canonical URLs, the sitemap and robots.
 * Set `NEXT_PUBLIC_SITE_URL` in the deployment environment; the localhost fallback keeps
 * dev and tests working and is never a published destination, because a build without
 * the variable is also a build that `validate:launch` refuses to release.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Every public route, in navigation order, without a language prefix. Each one is
 * published once per locale; `localisedRoutes()` expands them and the sitemap lists all.
 */
export const publicRoutes = [
  "/",
  "/work/medisapience",
  "/work/cem-nicaragua",
  "/work/credora",
  "/work/kiseki-no-oto",
] as const;

export type PublicRoute = (typeof publicRoutes)[number];

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

/** Every published page: each route in each language, in navigation order. */
export function localisedRoutes() {
  return publicRoutes.flatMap((route) =>
    locales.map((locale) => ({ route, locale, path: localePath(locale, route) })),
  );
}

/**
 * The `alternates` block for a page's metadata: its own canonical plus one `hreflang`
 * entry per language, so a search engine indexes the two versions as the same page in
 * two languages rather than as duplicates competing with each other.
 */
export function alternatesFor(locale: Locale, route: PublicRoute | string) {
  const languages = Object.fromEntries(
    locales.map((candidate) => [candidate, localePath(candidate, route)]),
  ) as Record<Locale, string>;

  return {
    canonical: localePath(locale, route),
    // `x-default` points at the fallback language, which is where an unmatched visitor lands.
    languages: { ...languages, "x-default": localePath("en", route) },
  };
}
