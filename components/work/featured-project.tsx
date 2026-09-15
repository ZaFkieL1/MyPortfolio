import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProductVisual } from "@/components/product/product-visual";

export function FeaturedProject({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <article className={`featured-project ${reverse ? "featured-project--reverse" : ""}`.trim()}>
      <div className="featured-project__copy">
        <div className="featured-project__meta">
          <span>{project.index}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="featured-project__facts">
          <span>{project.status}</span>
          <span>{project.platform}</span>
        </div>
        <Link className="project-link" href={`/work/${project.slug}`}>
          View case study
          <ArrowUpRightIcon />
        </Link>
      </div>
      <ProductVisual project={project.slug} caption={project.media[0].caption} />
    </article>
  );
}
