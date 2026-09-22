import { notFound } from "next/navigation";
import { TestimonialGroup } from "@/components/content/testimonial-group";
import { CaseSection, CaseStudyShell } from "@/components/case-study/bento";
import { HomeHero } from "@/components/home/home-hero";
import styles from "@/components/home/home.module.css";
import { OtherProjects } from "@/components/home/other-projects";
import { ProjectCard } from "@/components/home/project-card";
import { isLocale } from "@/content/i18n";
import { getPortfolioContent, getProject } from "@/content/portfolio";
import { getUi } from "@/content/ui";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const { person, hero, projects, otherProjects, services, process, technology, about, home, testimonials } =
    getPortfolioContent(lang);
  const ui = getUi(lang);

  // Only figures the client has published may headline the hero.
  const medisapienceResults = getProject(lang, "medisapience")
    .metrics.filter((metric) => metric.approved && metric.source?.includes("medisapience.com"))
    .map((metric) => ({ value: metric.value, label: metric.label }));

  return (
    <CaseStudyShell
      locale={lang}
      hero={
        <HomeHero
          availability={person.availability}
          statement={hero.statement}
          supporting={hero.supporting}
          system={hero.system}
          figures={medisapienceResults}
          figuresSource={home.figuresSource}
          labels={ui.hero}
        />
      }
    >
      {/* Open layouts on the warm canvas: hairlines and space do the grouping, not boxes. */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.marqueeGroup}>
              {services.map((service) => (
                <span key={service.title}>{service.title}<i /></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <CaseSection
        className={styles.spacious}
        id="work-title"
        anchor="work"
        title={home.work.title}
      >
        <div className={styles.projects} data-reveal-group>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              locale={lang}
              project={project}
              screenshotAlt={home.featuredScreenshotAlt}
              viewLabel={ui.project.viewCaseStudy}
              illustration={ui.illustration.productVisual}
            />
          ))}
        </div>

        {/* 03 and 04 of the same shelf: the same card at half the width. */}
        <OtherProjects locale={lang} projects={otherProjects} labels={ui.project} />
      </CaseSection>

      <CaseSection
        className={styles.spacious}
        id="services-title"
        anchor="services"
        title={home.services.title}
        lead={home.services.lead}
      >
        <ul className={styles.lineGrid} data-reveal-group>
          {services.map((service) => (
            <li key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection
        className={styles.spacious}
        id="process-title"
        anchor="process"
        title={home.process.title}
        lead={home.process.lead}
      >
        <ol className={styles.steps} data-reveal-group>
          {process.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </CaseSection>

      <CaseSection
        className={styles.spacious}
        id="technology-title"
        title={home.technology.title}
        lead={home.technology.lead}
      >
        <dl className={styles.rows} data-reveal-group>
          {technology.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </CaseSection>

      {/* A note in the wide column, standing facts in the margin — no card, no portrait. */}
      <CaseSection
        className={styles.spacious}
        id="about-title"
        anchor="about"
        title={about.title}
      >
        <div className={styles.about}>
          <div className={styles.aboutNote}>
            <p className={styles.aboutLead} data-reveal>{person.bio}</p>
            {about.note.map((paragraph) => <p key={paragraph} data-reveal>{paragraph}</p>)}
          </div>
          <dl className={styles.aboutFacts} data-reveal-group>
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div>
              <dt>{about.elsewhereLabel}</dt>
              <dd className={styles.aboutLinks}>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer me">LinkedIn</a>
                <a href={person.github} target="_blank" rel="noopener noreferrer me">GitHub</a>
              </dd>
            </div>
          </dl>
        </div>
      </CaseSection>

      <TestimonialGroup testimonials={testimonials} title={ui.testimonials.title} />

    </CaseStudyShell>
  );
}
