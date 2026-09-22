import { NextResponse, type NextRequest } from "next/server";
import { isLocale, localeCookieName, matchLocale, type Locale } from "@/content/i18n";

/**
 * Language negotiation, and the only request-time code on the site.
 *
 * Every page lives under `/{locale}`, so a request for `/` or `/work/credora` has no
 * language yet. This picks one and redirects:
 *
 *   1. the `NEXT_LOCALE` cookie, if the visitor has used the switcher — a deliberate
 *      choice outranks what their browser happens to advertise;
 *   2. otherwise the best match from `Accept-Language`, which is what the browser is
 *      configured to prefer and, in practice, follows the operating system;
 *   3. otherwise English.
 *
 * Requests that already name a language pass straight through untouched, so the
 * prerendered pages are still served from the CDN with no work done here.
 *
 * Note that `next.config.ts` sets no `i18n` block: that option belongs to the Pages
 * Router and does nothing in the App Router. The routing is the `app/[lang]` segment,
 * and this file is what puts a visitor on the right branch of it.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const [first] = pathname.split("/").filter(Boolean);
  if (isLocale(first)) return NextResponse.next();

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  // `/` becomes `/en`; `/work/credora` becomes `/en/work/credora`.
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);
  // Negotiation depends on the header, so a shared cache must not reuse one answer for all.
  response.headers.set("Vary", "Accept-Language");
  return response;
}

function preferredLocale(request: NextRequest): Locale {
  const remembered = request.cookies.get(localeCookieName)?.value;
  if (isLocale(remembered)) return remembered;

  return matchLocale(request.headers.get("accept-language"));
}

export const config = {
  /*
   * Everything except Next's own assets, the metadata routes that must stay at the root
   * (`/robots.txt`, `/sitemap.xml`, the icons) and any file with an extension in
   * `public/`. Without those exclusions a redirect would swallow the very files the
   * redirected page then asks for.
   */
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|.*\\.[^/]+$).*)",
  ],
};
