import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { portfolioContent } from "@/content/portfolio";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";
import { ProductVisual } from "@/components/product/product-visual";
import { PreviewBanner } from "@/components/layout/preview-banner";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { MetricGroup } from "@/components/content/metric-group";
import { TestimonialGroup } from "@/components/content/testimonial-group";
import { ButtonLink } from "@/components/ui/button-link";

export function CaseStudy({ project }: { project: Project }) {
  const nextProject = portfolioContent.projects.find((item) => item.slug !== project.slug)!;

  return (
    <>
      <Navbar />
      <PreviewBanner />
      <main id="main-content" className="case-study">
        <header className="case-hero container">
          <Link className="back-link" href="/#work">← All work</Link>
          <div className="case-hero__title-row">
            <p>{project.index} / Case study</p>
            <h1>{project.name}</h1>
            <p className="case-hero__summary">{project.summary}</p>
          </div>
          <dl className="case-facts">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Platform</dt><dd>{project.platform}</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            <div><dt>Year</dt><dd>{project.year}</dd></div>
          </dl>
        </header>

        <div className="container case-lead-visual">
          <ProductVisual project={project.slug} caption={project.media[0].caption} />
        </div>

        <section className="case-section container case-section--split" aria-labelledby={`${project.slug}-overview`}>
          <h2 id={`${project.slug}-overview`}>Overview</h2>
          <div className="case-section__body">
            <p className="lead-copy">{project.overview}</p>
            <p>{project.clientContext}</p>
          </div>
        </section>

        <section className="case-section container case-section--paired">
          <article>
            <h2>The challenge</h2>
            <p>{project.challenge}</p>
          </article>
          <article>
            <h2>The solution</h2>
            <p>{project.solution}</p>
          </article>
        </section>

        <section className="case-section container" aria-labelledby={`${project.slug}-features`}>
          <div className="case-section__heading">
            <h2 id={`${project.slug}-features`}>Key features</h2>
            <p>A connected product experience, not a collection of disconnected screens.</p>
          </div>
          <div className="feature-showcase">
            <ProductVisual project={project.slug} caption={project.media[1].caption} />
            <div className="feature-list">
              {project.features.map((feature) => (
                <article key={feature.title}>
                  <CheckIcon />
                  <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-engineering" aria-labelledby={`${project.slug}-engineering`}>
          <div className="container">
            <div className="case-section__heading">
              <h2 id={`${project.slug}-engineering`}>Engineering challenges</h2>
              <p>Product decisions translated into maintainable production foundations.</p>
            </div>
            <div className="engineering-list">
              {project.engineering.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section architecture-section" aria-labelledby={`${project.slug}-architecture`}>
          <div className="container">
            <div className="case-section__heading">
              <h2 id={`${project.slug}-architecture`}>System architecture</h2>
              <p>Illustrative structure pending validation against the production implementation.</p>
            </div>
            <div className="architecture-flow">
              {project.architecture.map((node, index) => (
                <article key={node.label}>
                  <span>0{index + 1}</span>
                  <h3>{node.label}</h3>
                  <p>{node.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section container case-section--split" aria-labelledby={`${project.slug}-results`}>
          <h2 id={`${project.slug}-results`}>Results</h2>
          <div className="case-section__body">
            <p className="lead-copy">A real product in production.</p>
            <p>{project.results}</p>
            <MetricGroup metrics={project.metrics} />
            <div className="evidence-placeholder">
              <strong>Verified evidence pending</strong>
              <span>Metrics, client quote, and approved product links will be added after review.</span>
            </div>
          </div>
        </section>

        <section className="case-section container case-section--split" aria-labelledby={`${project.slug}-technology`}>
          <h2 id={`${project.slug}-technology`}>Technology</h2>
          <div className="tag-list">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </section>

        <TestimonialGroup
          testimonials={
            project.testimonial
              ? [{ ...project.testimonial, approved: true as const }]
              : []
          }
        />

        <section className="case-contact" aria-labelledby={`${project.slug}-contact`}>
          <div className="container case-contact__inner">
            <div>
              <h2 id={`${project.slug}-contact`}>Need a similar product?</h2>
              <p>Share the workflow, constraints, and outcome you need to move forward.</p>
            </div>
            {project.liveUrl ? (
              <ButtonLink href={project.liveUrl} variant="inverse" target="_blank" rel="noreferrer">
                Visit live product <ArrowUpRightIcon />
              </ButtonLink>
            ) : (
              <ButtonLink href="/#contact" variant="inverse">
                Discuss a similar product <ArrowUpRightIcon />
              </ButtonLink>
            )}
          </div>
        </section>

        <section className="next-project" aria-labelledby={`${project.slug}-next`}>
          <Link href={`/work/${nextProject.slug}`} className="container next-project__link">
            <span>Next case study</span>
            <h2 id={`${project.slug}-next`}>{nextProject.name}</h2>
            <ArrowUpRightIcon />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
