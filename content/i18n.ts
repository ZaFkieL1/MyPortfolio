/**
 * The two languages the site is published in. English is the fallback: a visitor whose
 * browser asks for anything we do not speak gets English, never an empty page.
 *
 * Every route lives under `/{locale}`, so the locale is always in the URL and each
 * language is its own statically prerendered, separately indexable page. `proxy.ts`
 * puts a visitor on the right one the first time; the switcher in the navbar records a
 * deliberate choice so the negotiation does not override it on the next visit.
 */
export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** The cookie the language switcher writes, read back by `proxy.ts`. */
export const localeCookieName = "NEXT_LOCALE";

/** A year: the choice should outlive the visit that made it. */
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

/** `<html lang>` and OpenGraph want a region-qualified tag; the URL segment stays short. */
export const htmlLang: Record<Locale, string> = { en: "en", es: "es" };
export const openGraphLocale: Record<Locale, string> = { en: "en_US", es: "es_ES" };

/** What each language calls itself, for the switcher. */
export const localeNames: Record<Locale, string> = { en: "English", es: "Español" };

/** The short form on the switcher's face, where there is only room for a badge. */
export const localeShortNames: Record<Locale, string> = { en: "EN", es: "ES" };

/**
 * Pick a locale from an `Accept-Language` header.
 *
 * A hand-rolled parse rather than a dependency: with two languages the whole job is to
 * read the q-weighted list in order and take the first tag whose primary subtag we
 * publish, so `es-419`, `es-NI` and `es` all resolve to Spanish. Anything unrecognised —
 * or a missing header — falls through to English.
 */
export function matchLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...parameters] = part.trim().split(";");
      const quality = parameters
        .map((parameter) => /^q=([\d.]+)$/i.exec(parameter.trim())?.[1])
        .find(Boolean);
      return { tag: tag.trim().toLowerCase(), quality: quality ? Number(quality) : 1 };
    })
    .filter((entry) => entry.tag.length > 0 && Number.isFinite(entry.quality) && entry.quality > 0)
    // A stable sort keeps equal weights in the order the browser sent them.
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    if (tag === "*") return defaultLocale;
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }

  return defaultLocale;
}

/**
 * Prefix an in-site path with a locale. Hashes and already-prefixed paths are handled so
 * callers can pass the same `/#contact` or `/work/credora` they used before locales.
 */
export function localePath(locale: Locale, path: string): string {
  if (!path.startsWith("/")) return path;

  const [pathname, hash] = path.split("#");
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) segments.shift();

  const prefixed = `/${[locale, ...segments].join("/")}`;
  return hash ? `${prefixed}#${hash}` : prefixed;
}

/** The locale-free remainder of a pathname, used by the switcher to stay on the page. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) segments.shift();
  return segments.length > 0 ? `/${segments.join("/")}` : "/";
}
