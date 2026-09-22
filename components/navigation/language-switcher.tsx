"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeCookieMaxAge,
  localeCookieName,
  localeNames,
  localeShortNames,
  locales,
  stripLocale,
  type Locale,
} from "@/content/i18n";
import styles from "./language-switcher.module.css";

/**
 * Two links, not a `<select>`: each language is a real URL, so the control works before
 * hydration, opens in a new tab, and is crawlable as the `hreflang` pair it mirrors.
 * The pathname is preserved, so switching language keeps you on the page you were reading.
 *
 * Choosing a language also writes a cookie. `proxy.ts` reads it on the next visit to `/`
 * and honours the choice instead of re-running `Accept-Language` negotiation — otherwise a
 * Spanish-speaking visitor who prefers the English page would be sent back every time.
 */
/**
 * Outside the component on purpose: this touches the document directly, which belongs in
 * a plain function rather than in render. A failed write (blocked cookies, a private
 * window) must not stop the navigation — the URL already carries the language, so the
 * click still does the right thing and only the memory of the choice is lost.
 */
function rememberLocale(next: Locale) {
  try {
    document.cookie = `${localeCookieName}=${next}; path=/; max-age=${localeCookieMaxAge}; samesite=lax`;
  } catch {
    /* ignore */
  }
}

export function LanguageSwitcher({
  locale,
  label,
  switchTo,
}: {
  locale: Locale;
  label: string;
  switchTo: (language: string) => string;
}) {
  const pathname = usePathname();
  const rest = stripLocale(pathname ?? "/");

  return (
    <div className={styles.switcher} role="group" aria-label={label}>
      {locales.map((candidate) => {
        const current = candidate === locale;
        return (
          <Link
            key={candidate}
            href={rest === "/" ? `/${candidate}` : `/${candidate}${rest}`}
            hrefLang={candidate}
            className={styles.option}
            data-current={current ? "true" : "false"}
            aria-current={current ? "true" : undefined}
            aria-label={current ? undefined : switchTo(localeNames[candidate])}
            onClick={() => rememberLocale(candidate)}
          >
            {localeShortNames[candidate]}
          </Link>
        );
      })}
    </div>
  );
}
