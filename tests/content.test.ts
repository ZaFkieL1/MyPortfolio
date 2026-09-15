import { describe, expect, it } from "vitest";
import { portfolioContent } from "@/content/portfolio";

describe("preview content guardrails", () => {
  it("keeps the mock build out of search indexes", () => {
    expect(portfolioContent.readiness).toBe("mock");
    expect(portfolioContent.indexable).toBe(false);
  });

  it("contains both approved case-study routes", () => {
    expect(portfolioContent.projects.map((project) => project.slug)).toEqual([
      "medisapience",
      "cem-nicaragua",
    ]);
  });

  it("does not manufacture evidence while content is provisional", () => {
    for (const project of portfolioContent.projects) {
      expect(project.metrics).toEqual([]);
      expect(project.testimonial).toBeNull();
      expect(project.liveUrl).toBeNull();
      expect(project.media.every((item) => item.kind === "illustration")).toBe(
        true,
      );
    }
  });

  it("contains enough narrative structure for every case-study section", () => {
    for (const project of portfolioContent.projects) {
      expect(project.overview.length).toBeGreaterThan(40);
      expect(project.challenge.length).toBeGreaterThan(40);
      expect(project.solution.length).toBeGreaterThan(40);
      expect(project.features.length).toBeGreaterThanOrEqual(4);
      expect(project.engineering.length).toBeGreaterThanOrEqual(3);
      expect(project.architecture.length).toBeGreaterThanOrEqual(3);
    }
  });
});
