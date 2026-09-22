import Link from "next/link";
import { bento } from "@/components/case-study/bento";
import { ArrowUpRightIcon } from "@/components/icons";
import { availableScreenshots } from "@/components/work/side-project-page";
import { localePath, type Locale } from "@/content/i18n";
import type { SideProject } from "@/content/portfolio";
import type { UiStrings } from "@/content/ui";
import styles from "./home.module.css";

/**
 * Positions 03 and 04 of the same shelf. Identical card and identical grammar to the
 * featured pair — index and category, name, summary, chips, then an action row under a
 * hairline, in the same treatment the case-study cards use. Only the scale changes, and
 * the media column is absent because neither project has an approved capture.
 */
export function OtherProjects({
  projects,
  locale,
  labels,
}: {
  projects: readonly SideProject[];
  locale: Locale;
  labels: UiStrings["project"];
}) {
  return (
    <ul className={styles.others} data-reveal-group>
      {projects.map((project) => {
        // No captures on disk yet means no page worth opening.
        const hasScreenshots = availableScreenshots(project).length > 0;

        return (
          <li key={project.slug} className={`${bento.card} ${styles.other}`}>
            <div className={styles.projectMeta}>
              <span>{project.index}</span>
              <span className={styles.otherKind}>
                {project.kind}
                {project.siteUrl ? (
                  <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                    {new URL(project.siteUrl).hostname.replace(/^www\./, "")}
                    <ArrowUpRightIcon />
                  </a>
                ) : null}
              </span>
            </div>
            <h3>{project.name}</h3>
            {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul className={`${bento.chips} ${bento.chipsMuted} ${styles.otherStack}`}>
              <li>{project.status}</li>
              {project.technologies.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className={styles.otherFoot}>
              {hasScreenshots || project.sourceUrl ? (
                <div className={styles.projectActions}>
                  {hasScreenshots ? (
                    <Link className={styles.projectLink} href={localePath(locale, `/work/${project.slug}`)}>
                      {labels.viewScreenshots} <ArrowUpRightIcon />
                    </Link>
                  ) : null}
                  {project.sourceUrl ? (
                    <a
                      className={styles.projectLink}
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {labels.sourceCode} <ArrowUpRightIcon />
                    </a>
                  ) : null}
                </div>
              ) : null}
              {project.note ? <p className={styles.otherNote}>{project.note}</p> : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
