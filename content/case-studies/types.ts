/**
 * Plain-data shapes for case-study records. Everything here is serialisable copy:
 * no JSX, so the content modules stay readable and testable on their own. The bento
 * components accept these because every field is a string the renderer can place.
 */

export type Tint = "sky" | "peach" | "lime";

export type Fact = { label: string; value: string };

export type GridItem = {
  title: string;
  body?: string;
  details?: Fact[];
};

export type LinkRecord = { label: string; href: string };

/** A Mermaid figure with the ordered text equivalent that must read the same. */
export type DiagramRecord = {
  title: string;
  description: string;
  chart: string;
  steps: string[];
};

export type StatRecord = { value: string; label: string };

export type TimelineRecord = { date: string; title: string; body: string };

export type StepRecord = { label: string; title: string; body: string };

/**
 * One product screenshot. `key` names the image the renderer imports statically;
 * the copy stays here so no component holds words of its own.
 */
export type ShotRecord = { key: string; label: string; alt: string };

export type CaseStudyHero = {
  status: string;
  kicker: string;
  title: string;
  lead: string;
  action: LinkRecord;
  architectureLink: LinkRecord;
  facts: Fact[];
  website: LinkRecord;
  highlight: Fact;
  note: Fact;
  visualCaption: string;
};

export type CaseStudyCta = {
  title: string;
  body: string;
  action: LinkRecord;
  next: { title: string; href: string };
};

/** The contract both case studies share; each adds its own narrative sections. */
export type CaseStudyContent = {
  hero: CaseStudyHero;
  cta: CaseStudyCta;
};
