import { MermaidDiagram } from "@/components/content/mermaid-diagram";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  AsideGrid,
  BandCard,
  Card,
  CardGrid,
  CaseCta,
  CaseHero,
  CaseSection,
  CaseStudyShell,
  ChipList,
  DiagramCard,
  GhostLink,
  ListCard,
  OutcomeGrid,
  PairGrid,
  Screenshot,
  StatementCard,
  StatementLead,
  StatGrid,
  StepList,
  Testimonial,
  Timeline,
  VisualCard,
  bento,
} from "@/components/case-study/bento";
import { ButtonLink } from "@/components/ui/button-link";
import { localePath, type Locale } from "@/content/i18n";
import { getMedisapienceCaseStudy, getProject } from "@/content/portfolio";
import { getUi } from "@/content/ui";
import Image from "next/image";
import practiceFeedback from "./media/practice-feedback.webp";
import statistics from "./media/statistics.webp";
import whatToStudyToday from "./media/what-to-study-today.webp";
import styles from "./medisapience-case-study.module.css";
import { SessionSetupAnimation } from "./session-setup-animation";

export function MedisapienceCaseStudy({ locale }: { locale: Locale }) {
  const project = getProject(locale, "medisapience");
  const content = getMedisapienceCaseStudy(locale);
  const { hero, sections, labels, brief, banks, studyToday, outcome, closing, cta } = content;
  const ui = getUi(locale).caseStudy;
  const results = project.metrics.filter((metric) => metric.approved);

  return (
    <CaseStudyShell locale={locale}>
      <CaseHero
        status={hero.status}
        kicker={hero.kicker}
        title={hero.title}
        lead={hero.lead}
        actions={
          <>
            <ButtonLink href={localePath(locale, hero.action.href)} variant="primary">
              {hero.action.label} <ArrowUpRightIcon />
            </ButtonLink>
            <GhostLink href={hero.architectureLink.href}>{hero.architectureLink.label}</GhostLink>
          </>
        }
        facts={[
          ...hero.facts,
          {
            label: ui.websiteLabel,
            value: (
              <a href={hero.website.href} target="_blank" rel="noopener noreferrer">
                {hero.website.label} ↗
              </a>
            ),
          },
        ]}
        highlight={hero.highlight}
        note={hero.note}
      />

      <VisualCard>
        <SessionSetupAnimation caption={hero.visualCaption} strings={getUi(locale).illustration.sessionSetup} />
      </VisualCard>

      <CaseSection id="medisapience-brief">
        <StatementCard id="medisapience-brief" title={brief.title}>
          <StatementLead>{brief.lead}</StatementLead>
          <p>{brief.body}</p>
        </StatementCard>
        <CardGrid items={content.goals} />
      </CaseSection>

      <CaseSection id="medisapience-sides" title={sections.sides.title}>
        <PairGrid items={content.sides} />
      </CaseSection>

      <CaseSection id="medisapience-loop" title={sections.loop.title} lead={sections.loop.lead}>
        <StepList items={content.loop} />
        <Screenshot
          src={practiceFeedback}
          width={content.practiceScreenshot.width}
          height={content.practiceScreenshot.height}
          alt={content.practiceScreenshot.alt}
          caption={content.practiceScreenshot.caption}
        />
        <Card tint="sky" className={styles.studyToday}>
          <div>
            <h3>{studyToday.title}</h3>
            <p>{studyToday.body}</p>
          </div>
          <dl className={styles.signals} aria-label={labels.signalWeights}>
            {studyToday.signals.map(([label, weight]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>
                  <span className={styles.track} aria-hidden="true">
                    <span style={{ width: `${(parseInt(weight, 10) / studyToday.signalScale) * 100}%` }} />
                  </span>
                  {weight}
                </dd>
              </div>
            ))}
          </dl>
          <figure className={styles.studyShot}>
            <Image
              src={whatToStudyToday}
              width={studyToday.screenshot.width}
              height={studyToday.screenshot.height}
              quality={90}
              sizes="(max-width: 75rem) 100vw, 72rem"
              alt={studyToday.screenshot.alt}
            />
          </figure>
        </Card>
        <Screenshot
          src={statistics}
          width={content.statisticsScreenshot.width}
          height={content.statisticsScreenshot.height}
          alt={content.statisticsScreenshot.alt}
          caption={content.statisticsScreenshot.caption}
        />
        <BandCard title={content.operatingBand.title} tint="peach">
          {content.operatingBand.body}
        </BandCard>
      </CaseSection>

      <CaseSection id="medisapience-banks" title={banks.title} lead={banks.lead}>
        <Card className={styles.bankMap}>
          <div>
            <h3 className={bento.label}>{labels.contentHierarchy}</h3>
            <ol className={styles.bankTree}>
              {banks.levels.map((level) => <li key={level}>{level}</li>)}
            </ol>
          </div>
          <div>
            <h3 className={bento.label}>{labels.scopedToBank}</h3>
            <ChipList items={banks.scoped} />
            <p>{banks.migrationNote}</p>
          </div>
        </Card>
        <CardGrid items={banks.mechanics} />
      </CaseSection>

      <CaseSection id="medisapience-decisions" title={sections.decisions.title} lead={sections.decisions.lead}>
        <CardGrid items={content.decisions} />
        <DiagramCard className={styles.sessionCard}>
          <MermaidDiagram
            title={content.sessionDiagram.title}
            description={content.sessionDiagram.description}
            chart={content.sessionDiagram.chart}
            steps={content.sessionDiagram.steps}
            diagramLabel={ui.diagramLabel(content.sessionDiagram.title)}
          />
        </DiagramCard>
      </CaseSection>

      <CaseSection id="medisapience-operations" title={sections.operations.title} lead={sections.operations.lead}>
        <CardGrid items={content.operations} tint="peach" />
      </CaseSection>

      <CaseSection id="medisapience-architecture" title={sections.architecture.title} lead={sections.architecture.lead}>
        <DiagramCard>
          <MermaidDiagram
            title={content.architectureDiagram.title}
            description={content.architectureDiagram.description}
            chart={content.architectureDiagram.chart}
            steps={content.architectureDiagram.steps}
            diagramLabel={ui.diagramLabel(content.architectureDiagram.title)}
          />
        </DiagramCard>
        <StatGrid items={content.performance} />
      </CaseSection>

      <CaseSection id="medisapience-evolution" title={sections.evolution.title} lead={sections.evolution.lead}>
        <Timeline items={content.milestones} />
        <ListCard title={labels.addedAfterLaunch} items={content.afterLaunch} ordered />
      </CaseSection>

      <CaseSection id="medisapience-quality" title={sections.quality.title} lead={sections.quality.lead}>
        <AsideGrid>
          <StatGrid items={content.quality.stats} />
          <ListCard title={labels.coveredAreas} items={content.quality.testedAreas} />
        </AsideGrid>
      </CaseSection>

      <CaseSection id="medisapience-method" title={sections.method.title}>
        <CardGrid items={content.method} />
      </CaseSection>

      <CaseSection id="medisapience-outcome" title={outcome.title}>
        <OutcomeGrid
          lead={outcome.lead}
          body={outcome.body}
          source={outcome.source}
          stats={results.map((metric) => ({ value: metric.value, label: metric.label }))}
          statsLabel={ui.publishedResultsLabel}
          evidenceLabel={ui.evidenceLabel}
        />
      </CaseSection>

      {project.testimonial && project.testimonialSection && (
        <Testimonial
          id="medisapience-testimonial"
          title={project.testimonialSection.title}
          intro={project.testimonialSection.intro}
          highlight={project.testimonial.highlight}
          quote={project.testimonial.quote}
          name={project.testimonial.name}
          role={project.testimonial.role}
          initials={project.testimonial.initials}
          profile={project.testimonial.profile}
        />
      )}

      <CaseSection id="medisapience-closing">
        <StatementCard id="medisapience-closing" title={closing.title} intro={<p>{closing.intro}</p>}>
          <h3 className={bento.label}>{labels.technology}</h3>
          <ChipList items={closing.technology} muted />
        </StatementCard>
      </CaseSection>

      <CaseCta
        id="medisapience-contact"
        title={cta.title}
        body={cta.body}
        action={{ label: cta.action.label, href: localePath(locale, cta.action.href) }}
        next={{ label: ui.nextCaseStudy, title: cta.next.title, href: localePath(locale, cta.next.href) }}
      />
    </CaseStudyShell>
  );
}
