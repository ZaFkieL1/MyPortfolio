import Link from "next/link";
import { ArrowDownIcon, ArrowUpRightIcon } from "@/components/icons";
import { Footer } from "@/components/layout/footer";
import { PreviewBanner } from "@/components/layout/preview-banner";
import { Navbar } from "@/components/navigation/navbar";
import { ProductVisual } from "@/components/product/product-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { FeaturedProject } from "@/components/work/featured-project";
import { portfolioContent } from "@/content/portfolio";
import { TestimonialGroup } from "@/components/content/testimonial-group";

export default function Home() {
  const { person, hero, projects, services, process, technology } = portfolioContent;

  return (
    <>
      <Navbar />
      <PreviewBanner />
      <main id="main-content">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero__copy">
            <div className="availability"><span />{person.availability}</div>
            <h1 id="hero-title">{hero.statement}</h1>
            <p>{hero.supporting}</p>
            <div className="hero__actions">
              <ButtonLink href="#work" variant="primary">
                View my work <ArrowDownIcon />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Start a project <ArrowUpRightIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="hero__proof">
            <ProductVisual project="medisapience" compact />
            <Link className="hero-proof-card" href="/work/cem-nicaragua">
              <span>CEM Digital</span>
              <strong>Institutional site + product platform</strong>
              <ArrowUpRightIcon />
            </Link>
          </div>
        </section>

        <section className="proof-strip" aria-label="Product proof">
          <div className="container proof-strip__inner">
            <p>Built for real organizations</p>
            <div><span>MediSapience</span><i /> <span>CEM Nicaragua</span></div>
            <p>Production systems</p>
          </div>
        </section>

        <section id="work" className="work-section container" aria-labelledby="work-title">
          <div className="section-heading section-heading--wide">
            <h2 id="work-title">Selected work.</h2>
            <p>Two real platforms, shown at the scale and depth that product work deserves.</p>
          </div>
          <div className="featured-projects">
            {projects.map((project, index) => (
              <FeaturedProject key={project.slug} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </section>

        <section className="impact-strip" aria-label="Working principles">
          <div className="container impact-strip__grid">
            <article><strong>Production</strong><span>Built to operate beyond launch day</span></article>
            <article><strong>Full-stack</strong><span>One view across product and engineering</span></article>
            <article><strong>End to end</strong><span>From requirements through delivery</span></article>
          </div>
        </section>

        <section id="services" className="services-section container" aria-labelledby="services-title">
          <div className="section-heading">
            <h2 id="services-title">What I build.</h2>
            <p>Focused product engineering for software that has a real job to do.</p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article key={service.title} className="service-item">
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ArrowUpRightIcon />
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="process-section" aria-labelledby="process-title">
          <div className="container">
            <div className="section-heading section-heading--inverse">
              <h2 id="process-title">From idea to production.</h2>
              <p>A direct path from business context to software people can use and teams can run.</p>
            </div>
            <ol className="process-list">
              {process.map((step, index) => (
                <li key={step.title}>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="technology-section container" aria-labelledby="technology-title">
          <div className="section-heading">
            <h2 id="technology-title">Tools matched to the product.</h2>
            <p>The stack supports the work; it is not the work.</p>
          </div>
          <div className="technology-list">
            {technology.map((group) => (
              <article key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section container" aria-labelledby="about-title">
          <div className="about-portrait" aria-label="Portrait placeholder for Henry Gonzalez">
            <span>Portrait pending</span>
            <strong>HG</strong>
            <p>Nicaragua → Worldwide</p>
          </div>
          <div className="about-copy">
            <h2 id="about-title">Hey, I’m Henry.</h2>
            <p className="lead-copy">{person.bio}</p>
            <p>I work comfortably across product decisions and implementation detail, helping turn complex workflows into software that feels clear and dependable.</p>
            <dl>
              <div><dt>Based in</dt><dd>{person.location}</dd></div>
              <div><dt>Working with</dt><dd>International and remote teams</dd></div>
              <div><dt>Focus</dt><dd>Products, platforms, and custom software</dd></div>
            </dl>
          </div>
        </section>

        <TestimonialGroup testimonials={portfolioContent.testimonials} />

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-section__inner">
            <h2 id="contact-title"><span>Have a product in mind?</span> Let’s turn the real workflow into a product.</h2>
            <div className="contact-section__bottom">
              <p>Share the problem, the people involved, and what a useful first release needs to achieve.</p>
              <ButtonLink href={`mailto:${person.email}`} variant="inverse">
                Start a conversation <ArrowUpRightIcon />
              </ButtonLink>
            </div>
            <span className="contact-placeholder">Preview email: {person.email} · replace before launch</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
