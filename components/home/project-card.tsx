import Image from "next/image";
import Link from "next/link";
import { bento } from "@/components/case-study/bento";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProductVisual } from "@/components/product/product-visual";
import practiceFeedback from "@/components/work/media/practice-feedback.webp";
import type { Project } from "@/content/portfolio";
import styles from "./home.module.css";

/**
 * A featured project as one wide bento card: the story on the left, the product on the right.
 * MediSapience shows a real screen; projects without approved captures show their labelled
 * illustration. The media drifts inside its window as the card scrolls by (`data-parallax`).
 */
export function ProjectCard({ project }: { project: Project }) {
  const hasScreenshot = project.slug === "medisapience";

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
        </ul>
        <Link className={styles.projectLink} href={`/work/${project.slug}`}>
          View case study <ArrowUpRightIcon />
        </Link>
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
              alt="MediSapience in Practice mode: instant feedback, the reasoning behind the answer and a link to the page to read."
            />
          ) : (
            <ProductVisual project={project.slug} caption={project.media[0].caption} />
          )}
        </div>
      </div>
    </article>
  );
}
