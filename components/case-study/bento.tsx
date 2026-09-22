import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon, LinkedInIcon } from "@/components/icons";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { ButtonLink } from "@/components/ui/button-link";
import type { Locale } from "@/content/i18n";
import styles from "./bento.module.css";

/*
 * Case-study bento kit: the building blocks every case study composes, in reading order.
 * DESIGN.md → "Case study (bento)" documents the section recipe and when to use each block.
 *
 * Scroll reveals are wired in here: blocks carry `data-reveal`, grids carry
 * `data-reveal-group` (children enter one after another), and large media carry
 * `data-reveal="settle"`. `components/motion/scroll-reveal.tsx` reads those attributes.
 */

export type Tint = "sky" | "peach" | "lime";

const tintClass: Record<Tint, string> = {
  sky: styles.tintSky,
  peach: styles.tintPeach,
  lime: styles.tintLime,
};

function cx(...names: Array<string | false | null | undefined>) {
  return names.filter(Boolean).join(" ");
}

type Columns = 2 | 3 | 4;

const columnClass: Record<Columns, string | undefined> = {
  2: styles.cols2,
  3: undefined,
  4: styles.cols4,
};

/** Exposed for one-off blocks a case study builds itself (e.g. a custom diagram card). */
export const bento = styles;

/**
 * Page chrome + canvas. `hero` renders full-bleed, edge to edge and under the sticky navigation,
 * before the framed content.
 */
export function CaseStudyShell({
  children,
  hero,
  locale,
}: {
  children: ReactNode;
  hero?: ReactNode;
  /** The chrome needs the language too: the navbar, its switcher and the footer speak it. */
  locale: Locale;
}) {
  return (
    <>
      <Navbar locale={locale} />
      <main id="main-content" className={cx("case-study", styles.page, hero ? styles.pageWithHero : null)}>
        {hero}
        <div className={styles.frame}>{children}</div>
      </main>
      <Footer locale={locale} />
    </>
  );
}

type Fact = { label: string; value: ReactNode };

export function CaseHero({
  status,
  kicker,
  title,
  lead,
  actions,
  facts,
  highlight,
  note,
}: {
  status: string;
  kicker: string;
  title: string;
  lead: ReactNode;
  actions: ReactNode;
  facts: Fact[];
  highlight: Fact;
  note: Fact;
}) {
  return (
    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.status}><span aria-hidden="true" />{status}</p>
        <p className={styles.kicker}>{kicker}</p>
        <h1>{title}</h1>
        <p className={styles.heroLead}>{lead}</p>
        <div className={styles.heroActions}>{actions}</div>
      </div>
      <div className={styles.heroBento}>
        <dl className={cx(styles.card, styles.factsCard)}>
          {facts.map((fact) => (
            <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
          ))}
        </dl>
        <div className={cx(styles.card, styles.highlightCard)}>
          <span>{highlight.label}</span>
          <strong>{highlight.value}</strong>
        </div>
        <div className={cx(styles.card, styles.noteCard)}>
          <span>{note.label}</span>
          <p>{note.value}</p>
        </div>
      </div>
    </header>
  );
}

/** Secondary hero action: an underlined text link, next to the primary button. */
export function GhostLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className={styles.ghostLink} href={href}>{children}</a>;
}

/** The large product visual right under the hero (animation, illustration or screenshot). */
export function VisualCard({ children }: { children: ReactNode }) {
  return <div className={cx(styles.card, styles.visual)} data-reveal="settle">{children}</div>;
}

/** A page section. With `title`, renders the standard section head (h2 + optional lead). */
export function CaseSection({
  id,
  anchor,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  /** Section `id` for in-page links (e.g. `#services`); the heading keeps `id`. */
  anchor?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={anchor} className={cx(styles.section, className)} aria-labelledby={id}>
      {title ? (
        <div className={styles.sectionHead}>
          <h2 id={id} data-split>{title}</h2>
          {lead ? <p data-reveal>{lead}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

/** A plain card, for blocks a case study composes itself. */
export function Card({
  tint,
  className,
  reveal = true,
  children,
}: {
  tint?: Tint;
  className?: string;
  reveal?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={cx(styles.card, tint && tintClass[tint], className)} data-reveal={reveal ? "" : undefined}>
      {children}
    </div>
  );
}

/**
 * Section heading inside a card: the title (and optional intro) on the left, the argument on
 * the right. Use it where the section opens with a statement rather than a grid.
 */
export function StatementCard({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={cx(styles.card, styles.statement)} data-reveal>
      <div className={styles.statementIntro}>
        <h2 id={id}>{title}</h2>
        {intro}
      </div>
      <div className={styles.statementBody}>{children}</div>
    </div>
  );
}

/** The first, darker paragraph of a StatementCard body. */
export function StatementLead({ children }: { children: ReactNode }) {
  return <p className={styles.statementLead}>{children}</p>;
}

export type GridItem = {
  title: string;
  body?: ReactNode;
  details?: Fact[];
  /** Free content under the title (e.g. a ChipList); rendered as-is, not inside a <p>. */
  content?: ReactNode;
};

/** Equal cards (three by default): goals, decisions (with `details`), mechanisms, services. */
export function CardGrid({ items, tint, columns = 3 }: { items: GridItem[]; tint?: Tint; columns?: Columns }) {
  return (
    <ul className={cx(styles.cardGrid, columnClass[columns])} data-reveal-group>
      {items.map((item) => (
        <li key={item.title} className={cx(styles.card, tint && tintClass[tint])}>
          <h3>{item.title}</h3>
          {item.body ? <p>{item.body}</p> : null}
          {item.content}
          {item.details ? (
            <dl className={styles.details}>
              {item.details.map((detail) => (
                <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>
              ))}
            </dl>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/** Two tinted cards side by side, each a title and a set of chips (e.g. two audiences). */
export function PairGrid({ items }: { items: Array<{ title: string; chips: string[]; tint: Tint }> }) {
  return (
    <ul className={styles.pairGrid} data-reveal-group>
      {items.map((item) => (
        <li key={item.title} className={cx(styles.card, tintClass[item.tint])}>
          <h3>{item.title}</h3>
          <ChipList items={item.chips} />
        </li>
      ))}
    </ul>
  );
}

/** A real sequence: numbered steps with the number beside the title. */
export function StepList({
  items,
  columns = 3,
}: {
  items: Array<{ label?: string; title: string; body: ReactNode }>;
  columns?: Columns;
}) {
  return (
    <ol className={cx(styles.stepList, columnClass[columns])} data-reveal-group>
      {items.map((item, index) => (
        <li key={item.title} className={styles.card}>
          <div className={styles.stepHead}>
            <span className={styles.stepIndex}>{index + 1}</span>
            <div>
              {item.label ? <span className={styles.meta}>{item.label}</span> : null}
              <h3>{item.title}</h3>
            </div>
          </div>
          <p>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Dated milestones, oldest first; the last card (the present) inverts to dark. */
export function Timeline({ items }: { items: Array<{ date: string; title: string; body: ReactNode }> }) {
  return (
    <ol className={styles.timeline} data-reveal-group>
      {items.map((item) => (
        <li key={item.date} className={styles.card}>
          <span className={styles.meta}>{item.date}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** One full-width row: title on the left, explanation on the right. */
export function BandCard({ title, tint, children }: { title: string; tint?: Tint; children: ReactNode }) {
  return (
    <div className={cx(styles.card, styles.band, tint && tintClass[tint])} data-reveal>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export function ChipList({
  items,
  ordered = false,
  muted = false,
}: {
  items: string[];
  ordered?: boolean;
  muted?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className={cx(styles.chips, muted && styles.chipsMuted)}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </List>
  );
}

/** A small grey label over a set of chips ("Covered areas", "Added after launch"). */
export function ListCard({ title, items, ordered }: { title: string; items: string[]; ordered?: boolean }) {
  return (
    <div className={cx(styles.card, styles.listCard)} data-reveal>
      <h3 className={styles.label}>{title}</h3>
      <ChipList items={items} ordered={ordered} muted />
    </div>
  );
}

/**
 * Measured values with their context. The label is the `dt`, the value the `dd`.
 * `countUp` animates numeric values from zero when they scroll into view.
 */
export function StatGrid({
  items,
  columns = 2,
  countUp = false,
}: {
  items: Array<{ value: string; label: string }>;
  columns?: Columns;
  countUp?: boolean;
}) {
  return (
    <dl className={cx(styles.stats, columnClass[columns])} data-reveal-group>
      {items.map((item) => (
        <div key={item.label} className={styles.card}>
          <dt>{item.label}</dt>
          <dd data-countup={countUp ? "" : undefined}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Narrow column beside a wider one — typically a StatGrid next to a ListCard. */
export function AsideGrid({ children }: { children: ReactNode }) {
  return <div className={styles.asideGrid} data-reveal-group>{children}</div>;
}

/** Frames a `MermaidDiagram` (or any figure) as a borderless card. */
export function DiagramCard({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx(styles.card, styles.diagram, className)} data-reveal="settle">{children}</div>;
}

/** A product screenshot on a card. Import the image statically so it is hashed and cached. */
export function Screenshot({
  src,
  width,
  height,
  alt,
  caption,
  sizes = "(max-width: 75rem) 100vw, 75rem",
}: {
  src: StaticImageData | string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  sizes?: string;
}) {
  return (
    <figure className={cx(styles.card, styles.shot)} data-reveal="settle">
      <Image src={src} width={width} height={height} quality={90} sizes={sizes} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/**
 * A row of phone screenshots, each labelled, under one caption for the group.
 * Sized from the static import, so the row reserves its space before the images
 * arrive. Use it where a single wide screenshot would waste the width — a phone
 * capture is tall and narrow, and three of them read as a sequence.
 */
export function PhoneShots({
  shots,
  width,
  height,
  caption,
  framed = false,
  sizes = "(max-width: 40rem) 45vw, 20rem",
}: {
  shots: Array<{ src: StaticImageData | string; alt: string; label: string }>;
  /** The frame every shot in the row shares; stated so the row reserves its space. */
  width: number;
  height: number;
  caption?: string;
  /** Put the row on its own card. Leave off inside a `VisualCard`, which already frames it. */
  framed?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={framed ? cx(styles.card, styles.shot, styles.phones) : styles.phones}
      data-reveal={framed ? "settle" : undefined}
    >
      <div className={styles.phoneRow} data-reveal-group>
        {shots.map((shot) => (
          <div key={shot.label} className={styles.phone}>
            <Image
              src={shot.src}
              width={width}
              height={height}
              quality={90}
              sizes={sizes}
              alt={shot.alt}
            />
            <span>{shot.label}</span>
          </div>
        ))}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/**
 * The outcome: one verified result on lime, beside either the client-approved figures (`stats`)
 * or, while those are pending, the evidence list with every missing item labelled.
 * Only publish figures the client has made public or approved, and name the source.
 */
export function OutcomeGrid({
  lead,
  body,
  source,
  stats,
  evidence,
  statsLabel,
  evidenceLabel,
}: {
  lead: string;
  body: ReactNode;
  source?: string;
  stats?: Array<{ value: string; label: string }>;
  evidence?: Array<[label: string, status: string]>;
  /** Accessible name for each list, in the page's language; pass it with the list it names. */
  statsLabel?: string;
  evidenceLabel?: string;
}) {
  return (
    <div className={styles.outcome} data-reveal-group>
      <div className={cx(styles.card, styles.tintLime, styles.outcomeCard)}>
        <p className={styles.outcomeLead}>{lead}</p>
        <div>
          <p>{body}</p>
          {source ? <p className={styles.outcomeSource}>{source}</p> : null}
        </div>
      </div>
      {stats ? (
        <dl className={cx(styles.stats, styles.outcomeStats)} aria-label={statsLabel}>
          {stats.map((item) => (
            <div key={item.label} className={styles.card}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {evidence ? (
        <dl className={cx(styles.card, styles.evidence)} aria-label={evidenceLabel}>
          {evidence.map(([label, status]) => (
            <div key={label}><dt>{label}</dt><dd>{status}</dd></div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}

/**
 * A client quote as its own section: heading and context on the left, the quote and the person
 * on the right, with an optional link to their public profile. A long testimonial passes its
 * strongest line as `highlight` (set large) and the rest as `quote` (set as body text).
 */
export function Testimonial({
  id,
  title,
  intro,
  highlight,
  quote,
  name,
  role,
  initials,
  profile,
}: {
  id: string;
  title: string;
  intro: string;
  highlight?: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  profile?: { href: string; label: string };
}) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={cx(styles.card, styles.testimonial)} data-reveal>
        <div className={styles.testimonialIntro}>
          <h2 id={id}>{title}</h2>
          <p>{intro}</p>
        </div>
        <figure className={styles.testimonialQuote}>
          <span className={styles.quoteMark} aria-hidden="true">“</span>
          <blockquote>
            {highlight ? <p>{highlight}</p> : null}
            <p className={highlight ? styles.quoteBody : undefined}>{quote}</p>
          </blockquote>
          <figcaption className={styles.person}>
            <span className={styles.avatar} aria-hidden="true">{initials}</span>
            <span className={styles.personText}>
              <strong>{name}</strong>
              <span>{role}</span>
            </span>
            {profile ? (
              <a className={styles.profileLink} href={profile.href} target="_blank" rel="noopener noreferrer" aria-label={profile.label}>
                <LinkedInIcon />
              </a>
            ) : null}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/** Closing call to action beside the dark "next case study" card. */
export function CaseCta({
  id,
  title,
  body,
  action,
  next,
}: {
  id: string;
  title: string;
  body: string;
  action: { label: string; href: string };
  /** The card's own label; "Next case study" only where there is one. */
  next: { title: string; href: string; label?: string };
}) {
  return (
    <section className={cx(styles.section, styles.cta)} aria-labelledby={id} data-reveal-group>
      <div className={cx(styles.card, styles.ctaCard)}>
        <h2 id={id}>{title}</h2>
        <p>{body}</p>
        <ButtonLink href={action.href} variant="primary">
          {action.label} <ArrowUpRightIcon />
        </ButtonLink>
      </div>
      <Link href={next.href} className={cx(styles.card, styles.nextCard)}>
        <span className={styles.meta}>{next.label}</span>
        <strong>{next.title}</strong>
        <ArrowUpRightIcon />
      </Link>
    </section>
  );
}
