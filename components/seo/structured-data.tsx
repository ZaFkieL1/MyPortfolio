import { htmlLang, localePath, type Locale } from "@/content/i18n";
import { getPortfolioContent } from "@/content/portfolio";
import { absoluteUrl, siteUrl } from "@/content/site";

/**
 * Person and WebSite structured data, built only from verified identity records: name,
 * title, location, contact and the two profiles Henry owns. No ratings, reviews,
 * organization or employment claims — there is nothing verified to say about those, and
 * an unverifiable field here would be the same fabrication the content rules forbid.
 */
export function StructuredData({ locale }: { locale: Locale }) {
  const content = getPortfolioContent(locale);
  const { person } = content;

  const graph = [
    {
      "@type": "Person",
      "@id": `${siteUrl}/${locale}#person`,
      name: person.name,
      jobTitle: person.title,
      description: person.bio,
      email: `mailto:${person.email}`,
      url: absoluteUrl(localePath(locale, "/")),
      address: { "@type": "PostalAddress", addressCountry: person.location },
      sameAs: [person.linkedin, person.github].flatMap((url) => (url ? [url] : [])),
      knowsAbout: content.technology.flatMap((group) => group.items),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/${locale}#website`,
      url: absoluteUrl(localePath(locale, "/")),
      name: `${person.name} — ${person.title}`,
      inLanguage: htmlLang[locale],
      author: { "@id": `${siteUrl}/${locale}#person` },
      publisher: { "@id": `${siteUrl}/${locale}#person` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Serialised from typed content records, never from user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
