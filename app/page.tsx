import { TestimonialGroup } from "@/components/content/testimonial-group";
import { CaseSection, CaseStudyShell } from "@/components/case-study/bento";
import { HomeHero } from "@/components/home/home-hero";
import styles from "@/components/home/home.module.css";
import { ProjectCard } from "@/components/home/project-card";
import { portfolioContent } from "@/content/portfolio";

// Published by MediSapience on medisapience.com and approved for this portfolio.
const medisapienceResults = [
  { value: "20,641+", label: "Answer attempts" },
  { value: "310+", label: "Subscribers" },
  { value: "41%", label: "Premium subscribers who passed" },
];

export default function Home() {
  const { person, hero, projects, services, process, technology } = portfolioContent;

  return (
    <CaseStudyShell
      hero={
        <HomeHero
          availability={person.availability}
          statement={hero.statement}
          supporting={hero.supporting}
          system={hero.system}
          figures={medisapienceResults}
          figuresSource="MediSapience, in production. Figures published on medisapience.com."
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
        title="Selected work."
        lead="Two real platforms, shown at the scale and depth that product work deserves."
      >
        <div className={styles.projects} data-reveal-group>
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </CaseSection>

      <CaseSection
        className={styles.spacious}
        id="services-title"
        anchor="services"
        title="What I build."
        lead="Focused product engineering for software that has a real job to do."
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
        title="From idea to production."
        lead="A direct path from business context to software people can use and teams can run."
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
        title="Tools matched to the product."
        lead="The stack supports the work; it is not the work."
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

      <section id="about" className={`${styles.spacious} ${styles.about}`} aria-labelledby="about-title">
        <div className={styles.portrait} aria-label="Portrait placeholder for Henry Gonzalez" data-reveal="settle">
          <span>Portrait pending</span>
          <strong>{person.mark}</strong>
          <p>Nicaragua → Worldwide</p>
        </div>
        <div className={styles.aboutCopy}>
          <h2 id="about-title" data-split>Hey, I’m Henry.</h2>
          <p className={styles.aboutLead} data-reveal>{person.bio}</p>
          <p data-reveal>
            I work comfortably across product decisions and implementation detail, helping turn complex
            workflows into software that feels clear and dependable.
          </p>
          <dl className={styles.aboutFacts} data-reveal-group>
            <div><dt>Based in</dt><dd>{person.location}</dd></div>
            <div><dt>Working with</dt><dd>International and remote teams</dd></div>
            <div><dt>Focus</dt><dd>Products, platforms, and custom software</dd></div>
          </dl>
        </div>
      </section>

      <TestimonialGroup testimonials={portfolioContent.testimonials} />

    </CaseStudyShell>
  );
}
