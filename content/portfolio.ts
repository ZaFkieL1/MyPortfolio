import { enCemCaseStudy } from "./case-studies/cem-nicaragua.en";
import { esCemCaseStudy } from "./case-studies/cem-nicaragua.es";
import { enMedisapienceCaseStudy } from "./case-studies/medisapience.en";
import { esMedisapienceCaseStudy } from "./case-studies/medisapience.es";
import type { Locale } from "./i18n";
import { enPortfolio } from "./portfolio.en";
import { esPortfolio } from "./portfolio.es";
import readiness from "./readiness.json";
import type { ContentReadiness, PortfolioContent, ProjectSlug, SideProjectSlug } from "./types";

/**
 * The one place components read published content from. Everything is resolved by locale:
 * there is no locale-free `portfolioContent` any more, because a component that could
 * reach the English copy without asking for a language is a component that will one day
 * print English on the Spanish page.
 */
export type {
  AboutContent,
  ContactContent,
  ContentReadiness,
  HeroContent,
  HomeSections,
  PersonContent,
  PortfolioContent,
  Project,
  ProjectSlug,
  SideProject,
  SideProjectSlug,
} from "./types";
export type { CaseStudyContent, GridItem, Tint } from "./case-studies/types";
export type { CemCaseStudy } from "./case-studies/cem-nicaragua.en";
export type { MedisapienceCaseStudy } from "./case-studies/medisapience.en";

/** Readiness is a property of the release, not of a language: both pages ship together. */
export const contentReadiness = {
  status: readiness.status as ContentReadiness,
  indexable: readiness.indexable as boolean,
};

const portfolioByLocale: Record<Locale, PortfolioContent> = {
  en: enPortfolio,
  es: esPortfolio,
};

const medisapienceByLocale = {
  en: enMedisapienceCaseStudy,
  es: esMedisapienceCaseStudy,
};

const cemByLocale = {
  en: enCemCaseStudy,
  es: esCemCaseStudy,
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioByLocale[locale];
}

export function getProject(locale: Locale, slug: ProjectSlug) {
  const project = getPortfolioContent(locale).projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}

export function getSideProject(locale: Locale, slug: SideProjectSlug) {
  const project = getPortfolioContent(locale).otherProjects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown side project: ${slug}`);
  return project;
}

export function getMedisapienceCaseStudy(locale: Locale) {
  return medisapienceByLocale[locale];
}

export function getCemCaseStudy(locale: Locale) {
  return cemByLocale[locale];
}
