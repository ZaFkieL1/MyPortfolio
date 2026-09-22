/**
 * The shapes every locale's content module has to fill. Keeping them here means the two
 * language files are plain data with no types of their own: if one grows a field the
 * other has not translated, `tsc` says so before a half-English page can ship.
 */

export type ContentReadiness = "mock" | "verified";

export type ProjectSlug = "medisapience" | "cem-nicaragua";

export type Project = {
  slug: ProjectSlug;
  index: string;
  name: string;
  shortName: string;
  category: string;
  status: string;
  platform: string;
  role: string;
  year: string;
  summary: string;
  overview: string;
  clientContext: string;
  challenge: string;
  solution: string;
  features: Array<{ title: string; description: string }>;
  engineering: Array<{ title: string; description: string }>;
  architecture: Array<{ label: string; detail: string }>;
  results: string;
  technologies: string[];
  metrics: Array<{
    value: string;
    label: string;
    context?: string;
    source: string | null;
    approved: boolean;
  }>;
  testimonial: null | {
    quote: string;
    /** The one line pulled out above the quote, taken verbatim from it. */
    highlight?: string;
    name: string;
    role: string;
    initials: string;
    profile?: { href: string; label: string };
    approved: true;
  };
  liveUrl: string | null;
  media: Array<{
    kind: "illustration" | "screenshot";
    label: string;
    caption: string;
  }>;
  /** Section copy for the case-study testimonial; unused when `testimonial` is null. */
  testimonialSection?: { title: string; intro: string };
};

/**
 * Work that is described but not written up as a case study: no client narrative,
 * no metrics, no screenshots — a paragraph, the stack, and wherever it can be seen.
 */
export type SideProjectSlug = "credora" | "kiseki-no-oto";

export type SideProject = {
  /** Continues the featured projects' numbering: one shelf of work, not two lists. */
  index: string;
  slug: SideProjectSlug;
  name: string;
  kind: string;
  status: string;
  description: string[];
  /** Ownership or access caveat, when the honest answer is not "go look". */
  note?: string;
  technologies: string[];
  /** The live product, shown beside the category the way a case study shows its host. */
  siteUrl?: string;
  /** Public source, when there is any. */
  sourceUrl?: string;
  /**
   * Captures for the project's own page, as paths under `public/`. Each entry renders
   * only once its file exists on disk (checked at build time in
   * `components/work/side-project-page.tsx`), so a declared-but-missing capture shows
   * nothing rather than a broken frame, and the "View screenshots" action stays hidden
   * until there is something to see.
   */
  screenshots: Array<{ src: string; alt: string; caption: string }>;
};

export type PersonContent = {
  name: string;
  mark: string;
  title: string;
  location: string;
  availability: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
};

export type SystemNodeContent = { icon: string; title: string; detail: string };

export type HeroContent = {
  statement: string;
  supporting: string;
  /** The hero diagram: what a client brings in, the engineering, what ships. */
  system: {
    inputs: SystemNodeContent[];
    hub: { title: string; stages: string[] };
    outputs: SystemNodeContent[];
  };
};

export type ContactContent = {
  title: string;
  titleMuted: string;
  body: string;
  action: string;
  steps: Array<{ title: string; detail: string }>;
};

export type AboutContent = {
  title: string;
  note: string[];
  facts: Array<{ label: string; value: string }>;
  elsewhereLabel: string;
};

/** The headings the home page puts over each section, and the marquee's source line. */
export type HomeSections = {
  work: { title: string };
  services: { title: string; lead: string };
  process: { title: string; lead: string };
  technology: { title: string; lead: string };
  figuresSource: string;
  featuredScreenshotAlt: string;
};

export type PortfolioContent = {
  person: PersonContent;
  hero: HeroContent;
  contact: ContactContent;
  about: AboutContent;
  home: HomeSections;
  otherProjects: SideProject[];
  services: Array<{ title: string; description: string }>;
  process: Array<{ title: string; description: string }>;
  technology: Array<{ label: string; items: string[] }>;
  testimonials: Array<{ quote: string; name: string; role: string; approved: true }>;
  projects: Project[];
  /** Page-level titles and descriptions for `generateMetadata`. */
  metadata: {
    siteTitle: string;
    titleTemplate: string;
    description: string;
    applicationName: string;
    keywords: string[];
    openGraphDescription: string;
    /** Word order differs by language, so the title is built, not concatenated. */
    caseStudyTitle: (name: string) => string;
  };
};
