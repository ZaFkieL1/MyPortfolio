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
  PhoneShots,
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
import { getCemCaseStudy, getProject } from "@/content/portfolio";
import type { ShotRecord } from "@/content/case-studies/types";
import { getUi } from "@/content/ui";
import styles from "./cem-case-study.module.css";
import cemAdmin from "./media/cem-admin.webp";
import cemAdminQuestion from "./media/cem-admin-question.webp";
import cemAdminSimulators from "./media/cem-admin-simulators.webp";
import cemFeed from "./media/cem-feed.webp";
import cemQuestionReleased from "./media/cem-question-released.webp";
import cemQuestionWaiting from "./media/cem-question-waiting.webp";
import cemSimulatorBrief from "./media/cem-simulator-brief.webp";
import cemSimulatorRunning from "./media/cem-simulator-running.webp";

/** Every capture, keyed the way the content module names it in its `ShotRecord`s. */
const images = {
  feed: cemFeed,
  waiting: cemQuestionWaiting,
  released: cemQuestionReleased,
  brief: cemSimulatorBrief,
  running: cemSimulatorRunning,
  panel: cemAdmin,
  question: cemAdminQuestion,
  simulators: cemAdminSimulators,
};

/** Pairs a content record with its image, so no component holds copy of its own. */
const withImages = (shots: readonly ShotRecord[]) =>
  shots.map((shot) => ({
    src: images[shot.key as keyof typeof images],
    alt: shot.alt,
    label: shot.label,
  }));

export function CemCaseStudy({ locale }: { locale: Locale }) {
  const project = getProject(locale, "cem-nicaragua");
  const content = getCemCaseStudy(locale);
  const {
    hero, sections, labels, phoneFrame, heroShots, simulatorShots, simulatorShotsCaption,
    teamShots, teamShotsCaption, brief, tools, release, outcome, closing, cta,
  } = content;
  const ui = getUi(locale).caseStudy;

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
        <PhoneShots {...phoneFrame} caption={hero.visualCaption} shots={withImages(heroShots)} />
      </VisualCard>

      <CaseSection id="cem-brief">
        <StatementCard id="cem-brief" title={brief.title}>
          <StatementLead>{brief.lead}</StatementLead>
          <p>{brief.body}</p>
        </StatementCard>
        <CardGrid items={content.goals} />
      </CaseSection>

      <CaseSection id="cem-tools" title={tools.title} lead={tools.lead}>
        <Card className={styles.toolMap}>
          <ul className={styles.toolRows} aria-label={tools.listLabel}>
            {tools.retired.map((tool) => (
              <li key={tool.before}>
                <span className={styles.before}>
                  <s>{tool.before}</s>
                  <small>{tool.job}</small>
                </span>
                <span className={styles.arrow} aria-hidden="true">→</span>
                <strong>{tool.after}</strong>
              </li>
            ))}
            <li className={styles.kept}>
              <span className={styles.before}>
                {tools.kept.before}
                <small>{tools.kept.job}</small>
              </span>
              <span className={styles.arrow} aria-hidden="true">→</span>
              <strong>{tools.kept.after}</strong>
            </li>
          </ul>
        </Card>
      </CaseSection>

      <CaseSection id="cem-sides" title={sections.sides.title}>
        <PairGrid items={content.sides} />
      </CaseSection>

      <CaseSection id="cem-loop" title={sections.loop.title} lead={sections.loop.lead}>
        <StepList items={content.day} />
        <Card tint="sky" className={styles.releaseCard}>
          <div>
            <h3>{release.title}</h3>
            <p>{release.body}</p>
          </div>
          <ol className={styles.releaseTimeline} aria-label={release.timelineLabel}>
            {release.timeline.map((item) => (
              <li key={item.time}>
                <strong>{item.time}</strong>
                <span>{item.event}</span>
              </li>
            ))}
          </ol>
        </Card>
        <BandCard title={content.feedBand.title} tint="peach">
          {content.feedBand.body}
        </BandCard>
      </CaseSection>

      <CaseSection id="cem-simulators" title={sections.simulators.title} lead={sections.simulators.lead}>
        <CardGrid items={content.simulators} />
        <PhoneShots
          {...phoneFrame}
          framed
          caption={simulatorShotsCaption}
          shots={withImages(simulatorShots)}
        />
      </CaseSection>

      <CaseSection id="cem-decisions" title={sections.decisions.title} lead={sections.decisions.lead}>
        <CardGrid items={content.decisions} />
        <DiagramCard className={styles.flowCard}>
          <MermaidDiagram
            title={content.releaseDiagram.title}
            description={content.releaseDiagram.description}
            chart={content.releaseDiagram.chart}
            steps={content.releaseDiagram.steps}
            diagramLabel={ui.diagramLabel(content.releaseDiagram.title)}
          />
        </DiagramCard>
      </CaseSection>

      <CaseSection id="cem-operations" title={sections.operations.title} lead={sections.operations.lead}>
        <CardGrid items={content.operations} tint="peach" columns={2} />
        <PhoneShots {...phoneFrame} framed caption={teamShotsCaption} shots={withImages(teamShots)} />
      </CaseSection>

      <CaseSection anchor="cem-architecture" id="cem-architecture-title" title={sections.architecture.title} lead={sections.architecture.lead}>
        <DiagramCard>
          <MermaidDiagram
            title={content.architectureDiagram.title}
            description={content.architectureDiagram.description}
            chart={content.architectureDiagram.chart}
            steps={content.architectureDiagram.steps}
            diagramLabel={ui.diagramLabel(content.architectureDiagram.title)}
          />
        </DiagramCard>
        <StatGrid items={content.reminders} />
      </CaseSection>

      <CaseSection id="cem-evolution" title={sections.evolution.title} lead={sections.evolution.lead}>
        <Timeline items={content.milestones} />
        <ListCard title={labels.addedAfterLaunch} items={content.afterLaunch} ordered />
      </CaseSection>

      <CaseSection id="cem-quality" title={sections.quality.title} lead={sections.quality.lead}>
        <AsideGrid>
          <StatGrid items={content.quality.stats} />
          <ListCard title={labels.coveredAreas} items={content.quality.testedAreas} />
        </AsideGrid>
      </CaseSection>

      <CaseSection id="cem-method" title={sections.method.title}>
        <CardGrid items={content.method} />
      </CaseSection>

      <CaseSection id="cem-outcome" title={outcome.title}>
        <OutcomeGrid
          lead={outcome.lead}
          body={outcome.body}
          evidence={outcome.evidence}
          statsLabel={ui.publishedResultsLabel}
          evidenceLabel={ui.evidenceLabel}
        />
      </CaseSection>

      {/* CEM has approved no quote, so the section is omitted rather than filled. */}
      {project.testimonial && project.testimonialSection && (
        <Testimonial
          id="cem-testimonial"
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

      <CaseSection id="cem-closing">
        <StatementCard id="cem-closing" title={closing.title} intro={<p>{closing.intro}</p>}>
          <h3 className={bento.label}>{labels.technology}</h3>
          <ChipList items={closing.technology} muted />
        </StatementCard>
      </CaseSection>

      <CaseCta
        id="cem-contact"
        title={cta.title}
        body={cta.body}
        action={{ label: cta.action.label, href: localePath(locale, cta.action.href) }}
        next={{ label: ui.nextCaseStudy, title: cta.next.title, href: localePath(locale, cta.next.href) }}
      />
    </CaseStudyShell>
  );
}
