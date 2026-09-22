import { ImageResponse } from "next/og";
import { isLocale, locales } from "@/content/i18n";
import { getPortfolioContent } from "@/content/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/** The card's own words come from the locale, so a shared link previews in its language. */
export async function generateImageMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  return [{ id: locale, size, contentType, alt: getPortfolioContent(locale).metadata.siteTitle }];
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const { person, hero, metadata } = getPortfolioContent(locale);

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "#F3F3F0", color: "#0A0A0A", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24 }}>
        <strong>{person.mark}</strong>
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <i style={{ width: 12, height: 12, borderRadius: 999, background: "#C6F63D" }} />
          {hero.system.hub.title}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <span style={{ fontSize: 24, marginBottom: 22 }}>{person.name}</span>
        <strong style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: "-4px" }}>{hero.statement}</strong>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
        <span>{person.title}</span>
        <span>{metadata.applicationName}</span>
      </div>
    </div>,
    size,
  );
}
