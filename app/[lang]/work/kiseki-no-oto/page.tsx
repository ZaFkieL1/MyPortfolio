import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SideProjectPage } from "@/components/work/side-project-page";
import { isLocale, openGraphLocale } from "@/content/i18n";
import { getPortfolioContent, getSideProject } from "@/content/portfolio";
import { alternatesFor } from "@/content/site";

const route = "/work/kiseki-no-oto";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work/kiseki-no-oto">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const project = getSideProject(lang, "kiseki-no-oto");
  const { person } = getPortfolioContent(lang);
  const description = project.description[0];
  const alternates = alternatesFor(lang, route);

  return {
    title: project.name,
    description,
    alternates,
    openGraph: {
      title: `${project.name} — ${person.name}`,
      description,
      url: alternates.canonical,
      locale: openGraphLocale[lang],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${person.name}`,
      description,
    },
  };
}

export default async function KisekiNoOtoPage({ params }: PageProps<"/[lang]/work/kiseki-no-oto">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <SideProjectPage
      locale={lang}
      project={getSideProject(lang, "kiseki-no-oto")}
      next={{ title: getSideProject(lang, "credora").name, href: "/work/credora" }}
    />
  );
}
