import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StructuredData } from "@/components/seo/structured-data";
import { htmlLang, isLocale, locales, openGraphLocale, type Locale } from "@/content/i18n";
import { contentReadiness, getPortfolioContent } from "@/content/portfolio";
import { alternatesFor, siteUrl } from "@/content/site";
import { getUi } from "@/content/ui";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

/** Both languages are prerendered at build time; nothing here is request-dependent. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const { metadata, person } = getPortfolioContent(lang);
  const indexable = contentReadiness.indexable;

  return {
    metadataBase: new URL(siteUrl),
    alternates: alternatesFor(lang, "/"),
    title: {
      default: metadata.siteTitle,
      template: metadata.titleTemplate,
    },
    description: metadata.description,
    applicationName: metadata.applicationName,
    authors: [{ name: person.name }],
    keywords: metadata.keywords,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: { index: indexable, follow: indexable },
    },
    openGraph: {
      title: metadata.siteTitle,
      description: metadata.openGraphDescription,
      type: "website",
      locale: openGraphLocale[lang],
      url: alternatesFor(lang, "/").canonical,
      siteName: person.name,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.siteTitle,
      description: metadata.openGraphDescription,
    },
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const ui = getUi(locale);

  return (
    // Next 16 only forces instant scroll-to-top on route changes when this attribute is present;
    // without it, the global `scroll-behavior: smooth` leaves navigation mid-page.
    <html lang={htmlLang[locale]} className={geist.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">{ui.skipToContent}</a>
        {children}
        <ScrollReveal />
        <StructuredData locale={locale} />
      </body>
    </html>
  );
}
