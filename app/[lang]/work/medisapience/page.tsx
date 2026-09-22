import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MedisapienceCaseStudy } from "@/components/work/medisapience-case-study";
import { isLocale, openGraphLocale } from "@/content/i18n";
import { getPortfolioContent, getProject } from "@/content/portfolio";
import { alternatesFor } from "@/content/site";

const route = "/work/medisapience";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work/medisapience">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const project = getProject(lang, "medisapience");
  const { metadata, person } = getPortfolioContent(lang);
  const title = metadata.caseStudyTitle(project.name);
  const alternates = alternatesFor(lang, route);

  return {
    title,
    description: project.summary,
    alternates,
    openGraph: {
      title: `${title} — ${person.name}`,
      url: alternates.canonical,
      description: project.summary,
      locale: openGraphLocale[lang],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${person.name}`,
      description: project.summary,
    },
  };
}

export default async function MediSapiencePage({ params }: PageProps<"/[lang]/work/medisapience">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <MedisapienceCaseStudy locale={lang} />;
}
