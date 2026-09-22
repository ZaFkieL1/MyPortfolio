import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CemCaseStudy } from "@/components/work/cem-case-study";
import { isLocale, openGraphLocale } from "@/content/i18n";
import { getPortfolioContent, getProject } from "@/content/portfolio";
import { alternatesFor } from "@/content/site";

const route = "/work/cem-nicaragua";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work/cem-nicaragua">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const project = getProject(lang, "cem-nicaragua");
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

export default async function CemPage({ params }: PageProps<"/[lang]/work/cem-nicaragua">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <CemCaseStudy locale={lang} />;
}
