import { describe, expect, it } from "vitest";
import { locales, type Locale } from "@/content/i18n";
import {
  contentReadiness,
  getCemCaseStudy,
  getMedisapienceCaseStudy,
  getPortfolioContent,
} from "@/content/portfolio";

describe("preview content guardrails", () => {
  it("keeps the mock build out of search indexes", () => {
    expect(contentReadiness.status).toBe("mock");
    expect(contentReadiness.indexable).toBe(false);
  });

  // Every guarantee below has to hold in every language, or one page ships weaker
  // evidence rules than the other.
  describe.each(locales)("in %s", (locale: Locale) => {
    const content = getPortfolioContent(locale);

    it("contains both approved case-study routes", () => {
      expect(content.projects.map((project) => project.slug)).toEqual([
        "medisapience",
        "cem-nicaragua",
      ]);
    });

    it("publishes a metric only with approval and a source", () => {
      for (const project of content.projects) {
        for (const metric of project.metrics) {
          expect(metric.approved).toBe(true);
          expect(metric.source).toBeTruthy();
        }
      }
    });

    it("publishes a testimonial only with attribution, and none for CEM", () => {
      const medisapience = content.projects.find((p) => p.slug === "medisapience");
      expect(medisapience?.testimonial).toMatchObject({
        approved: true,
        name: "Dr. Yasser Silva Morales",
      });
      expect(medisapience?.testimonial?.quote.length).toBeGreaterThan(40);

      // CEM has approved no quote; the case study must omit the section, not fill it.
      expect(content.projects.find((p) => p.slug === "cem-nicaragua")?.testimonial).toBeNull();
    });

    it("points every project at a real destination", () => {
      for (const project of content.projects) {
        expect(project.liveUrl).toMatch(/^https:\/\//);
        expect(project.year).not.toBe("Preview");
      }
    });

    it("resolves the personal contact record to approved destinations", () => {
      const { person } = content;
      expect(person.email).toBe("hjosuegm0@gmail.com");
      expect(person.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\//);
      expect(person.github).toMatch(/^https:\/\/github\.com\//);
    });

    it("contains enough narrative structure for every case-study section", () => {
      for (const project of content.projects) {
        expect(project.overview.length).toBeGreaterThan(40);
        expect(project.challenge.length).toBeGreaterThan(40);
        expect(project.solution.length).toBeGreaterThan(40);
        expect(project.features.length).toBeGreaterThanOrEqual(4);
        expect(project.engineering.length).toBeGreaterThanOrEqual(3);
        expect(project.architecture.length).toBeGreaterThanOrEqual(3);
      }
    });

    it("keeps every published case-study word in the content layer", () => {
      for (const study of [getMedisapienceCaseStudy(locale), getCemCaseStudy(locale)]) {
        expect(study.hero.title.length).toBeGreaterThan(20);
        expect(study.hero.website.href).toMatch(/^https:\/\//);
        expect(study.cta.next.href).toMatch(/^\/work\//);
        expect(study.architectureDiagram.steps.length).toBeGreaterThanOrEqual(5);
        expect(study.closing.technology.length).toBeGreaterThanOrEqual(5);
      }
    });
  });
});

/**
 * The two languages are separate files, so nothing but a test stops them drifting apart.
 * These compare the parts that must stay identical — evidence, destinations, structure —
 * and the parts that must differ, which is the prose itself.
 */
describe("the Spanish page matches the English one", () => {
  const en = getPortfolioContent("en");
  const es = getPortfolioContent("es");

  it("publishes the same figures from the same sources", () => {
    /** "20,641+" and "1 year" / "1 año" are the same figure; only the unit is language. */
    const figure = (value: string) => value.replace(/[^\d.,%+]/g, "");

    for (const [index, project] of en.projects.entries()) {
      const translated = es.projects[index];
      expect(translated.slug).toBe(project.slug);
      expect(translated.metrics.map((metric) => figure(metric.value))).toEqual(
        project.metrics.map((metric) => figure(metric.value)),
      );
      // A source names where a figure was published, so it still points at that place.
      for (const metric of translated.metrics) {
        expect(metric.source).toMatch(/medisapience\.com|7 de enero de 2026/);
      }
    }
  });

  it("links to the same destinations", () => {
    expect(es.projects.map((p) => p.liveUrl)).toEqual(en.projects.map((p) => p.liveUrl));
    expect(es.otherProjects.map((p) => p.slug)).toEqual(en.otherProjects.map((p) => p.slug));
    expect(es.otherProjects.map((p) => p.siteUrl)).toEqual(en.otherProjects.map((p) => p.siteUrl));
    expect(es.otherProjects.map((p) => p.sourceUrl)).toEqual(
      en.otherProjects.map((p) => p.sourceUrl),
    );
  });

  it("names the same tools, translating only the categories around them", () => {
    // Group labels ("Data", "Datos") and generic entries are copy; product names are not.
    expect(es.technology.map((group) => group.items.length)).toEqual(
      en.technology.map((group) => group.items.length),
    );

    const named = (content: typeof en) =>
      content.technology.flatMap((group) => group.items).filter((item) => /[.A-Z]{2}|\./.test(item));
    expect(named(es)).toEqual(named(en));

    // Each project's stack is product names only, so it must be identical in both.
    for (const [index, project] of en.projects.entries()) {
      expect(es.projects[index].technologies).toEqual(project.technologies);
    }
    for (const [index, project] of en.otherProjects.entries()) {
      expect(es.otherProjects[index].technologies).toEqual(project.technologies);
    }
  });

  it("declares the same screenshots, so a capture appears in both languages", () => {
    for (const [index, project] of en.otherProjects.entries()) {
      expect(es.otherProjects[index].screenshots.map((shot) => shot.src)).toEqual(
        project.screenshots.map((shot) => shot.src),
      );
    }
  });

  it("has the same number of sections, cards and steps", () => {
    expect(es.services).toHaveLength(en.services.length);
    expect(es.process).toHaveLength(en.process.length);
    expect(es.contact.steps).toHaveLength(en.contact.steps.length);
    expect(es.about.note).toHaveLength(en.about.note.length);
    expect(es.hero.system.hub.stages).toHaveLength(en.hero.system.hub.stages.length);
  });

  it("actually translates the prose rather than copying it", () => {
    expect(es.hero.statement).not.toBe(en.hero.statement);
    expect(es.person.bio).not.toBe(en.person.bio);
    expect(es.projects[0].summary).not.toBe(en.projects[0].summary);
  });

  it("keeps each case study's shots and diagram steps aligned across languages", () => {
    const enCem = getCemCaseStudy("en");
    const esCem = getCemCaseStudy("es");
    expect(esCem.heroShots.map((shot) => shot.key)).toEqual(enCem.heroShots.map((s) => s.key));
    expect(esCem.teamShots.map((shot) => shot.key)).toEqual(enCem.teamShots.map((s) => s.key));
    expect(esCem.phoneFrame).toEqual(enCem.phoneFrame);

    const enMedi = getMedisapienceCaseStudy("en");
    const esMedi = getMedisapienceCaseStudy("es");
    expect(esMedi.architectureDiagram.steps).toHaveLength(
      enMedi.architectureDiagram.steps.length,
    );
    expect(esMedi.studyToday.signalScale).toBe(enMedi.studyToday.signalScale);
    expect(esMedi.practiceScreenshot.width).toBe(enMedi.practiceScreenshot.width);
  });
});
