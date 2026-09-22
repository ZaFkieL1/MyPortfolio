import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import {
  CaseCta,
  CaseSection,
  CaseStudyShell,
  ChipList,
  StatementCard,
  StatementLead,
  bento,
} from "@/components/case-study/bento";
import { ArrowUpRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { localePath, type Locale } from "@/content/i18n";
import type { SideProject } from "@/content/portfolio";
import { getUi } from "@/content/ui";
import styles from "./side-project-page.module.css";

/**
 * A capture counts only once its file is on disk. The check runs on the server while the
 * route is prerendered, so a declared-but-missing screenshot renders nothing instead of a
 * broken frame — and the moment the file is dropped into `public/`, the next build shows it
 * with no code change.
 */
export function availableScreenshots(project: SideProject) {
  return project.screenshots.filter((shot) =>
    existsSync(join(process.cwd(), "public", shot.src.replace(/^\//, ""))),
  );
}

/**
 * The page behind a described project's "View screenshots" action. Not a case study: no
 * client narrative, no metrics, no testimonial — the same description the shelf carries,
 * then the captures, each saying what it proves.
 */
export function SideProjectPage({
  project,
  next,
  locale,
}: {
  project: SideProject;
  /** The other described project, linked by its locale-free route. */
  next: { title: string; href: string };
  locale: Locale;
}) {
  const shots = availableScreenshots(project);
  const ui = getUi(locale).sideProject;

  return (
    <CaseStudyShell locale={locale}>
      <header className={styles.head}>
        <p className={styles.meta}>
          <span>{project.index}</span>
          <span>{project.kind}</span>
          <span>{project.status}</span>
        </p>
        <h1 className={styles.name} data-split>{project.name}</h1>
        <div className={styles.lead}>
          {project.description.map((paragraph) => <p key={paragraph} data-reveal>{paragraph}</p>)}
          {project.note ? <p className={styles.note} data-reveal>{project.note}</p> : null}
        </div>
        <div className={styles.actions} data-reveal>
          {project.siteUrl ? (
            <ButtonLink href={project.siteUrl} variant="primary">
              {ui.visitSite} <ArrowUpRightIcon />
            </ButtonLink>
          ) : null}
          {project.sourceUrl ? (
            <a
              className={styles.ghost}
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.sourceCode} <ArrowUpRightIcon />
            </a>
          ) : null}
          <Link className={styles.ghost} href={localePath(locale, "/#work")}>
            {ui.backToWork}
          </Link>
        </div>
      </header>

      {shots.length > 0 ? (
        <CaseSection id={`${project.slug}-screens`} title={ui.screensTitle}>
          <div className={styles.shots}>
            {shots.map((shot) => (
              <figure key={shot.src} className={`${bento.card} ${styles.shot}`} data-reveal="settle">
                <div className={styles.frame}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 75rem) 100vw, 72rem"
                  />
                </div>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </CaseSection>
      ) : null}

      <CaseSection id={`${project.slug}-stack`}>
        <StatementCard id={`${project.slug}-stack`} title={ui.stackTitle}>
          <StatementLead>{ui.stackLead(project.kind, project.status)}</StatementLead>
          <h3 className={bento.label}>{ui.technologyLabel}</h3>
          <ChipList items={project.technologies} muted />
        </StatementCard>
      </CaseSection>

      <CaseCta
        id={`${project.slug}-contact`}
        title={ui.ctaTitle}
        body={ui.ctaBody}
        action={{ label: ui.ctaAction, href: localePath(locale, "/#contact") }}
        next={{ label: ui.nextProject, title: next.title, href: localePath(locale, next.href) }}
      />
    </CaseStudyShell>
  );
}
