import Image from "next/image";
import Link from "next/link";
import { bento } from "@/components/case-study/bento";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProductVisual } from "@/components/product/product-visual";
import practiceFeedback from "@/components/work/media/practice-feedback.webp";
import { localePath, type Locale } from "@/content/i18n";
import type { Project } from "@/content/portfolio";
import type { UiStrings } from "@/content/ui";
import styles from "./home.module.css";

/**
 * A featured project as one wide bento card: the story on the left, the product on the right.
 * A project with an approved capture shows the real screen; one without shows its labelled
 * illustration. The media drifts inside its window as the card scrolls by (`data-parallax`).
 */
export function ProjectCard({
  project,
  locale,
  screenshotAlt,
  viewLabel,
  illustration,
}: {
  project: Project;
  locale: Locale;
  /** The capture's alt text, in the page's language. */
  screenshotAlt: string;
  viewLabel: string;
  /** Words for the labelled illustration a project without an approved capture falls back to. */
  illustration: UiStrings["illustration"]["productVisual"];
}) {
  const hasScreenshot = project.media.some((item) => item.kind === "screenshot");

  return (
    <article className={`${bento.card} ${styles.project}`}>
      <div className={styles.projectCopy}>
        <div className={styles.projectMeta}>
          <span>{project.index}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <ul className={`${bento.chips} ${bento.chipsMuted}`}>
          <li>{project.status}</li>
          <li>{project.platform}</li>
          <li>{project.year}</li>
        </ul>
        <div className={styles.projectActions}>
          <Link className={styles.projectLink} href={localePath(locale, `/work/${project.slug}`)}>
            {viewLabel} <ArrowUpRightIcon />
          </Link>
          {project.liveUrl ? (
            <a
              className={styles.projectLive}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {new URL(project.liveUrl).hostname.replace(/^www\./, "")}
            </a>
          ) : null}
        </div>
      </div>
      <div className={`${styles.projectMedia} ${hasScreenshot ? "" : styles.projectMediaLight}`.trim()}>
        <div data-parallax="0.1">
          {hasScreenshot ? (
            <Image
              src={practiceFeedback}
              width={1648}
              height={890}
              quality={90}
              sizes="(max-width: 64rem) 100vw, 44rem"
              alt={screenshotAlt}
            />
          ) : (
            <ProductVisual project={project.slug} caption={project.media[0].caption} strings={illustration} />
          )}
        </div>
      </div>
    </article>
  );
}
