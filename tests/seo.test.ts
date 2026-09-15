import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { metadata as medisapienceMetadata } from "@/app/work/medisapience/page";
import { metadata as cemMetadata } from "@/app/work/cem-nicaragua/page";

describe("preview discovery controls", () => {
  it("disallows crawlers while content is mock", () => {
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
  });

  it("lists every public route for launch readiness", () => {
    expect(sitemap().map((entry) => new URL(entry.url).pathname)).toEqual([
      "/",
      "/work/medisapience",
      "/work/cem-nicaragua",
    ]);
  });

  it("gives each case study its own social title and description", () => {
    expect(medisapienceMetadata.openGraph).toMatchObject({
      title: "MediSapience case study — Henry Gonzalez",
      description: expect.stringContaining("medical learning"),
    });
    expect(cemMetadata.openGraph).toMatchObject({
      title: "CEM Digital case study — Henry Gonzalez",
      description: expect.stringContaining("CEM Nicaragua"),
    });
    expect(medisapienceMetadata.twitter).toMatchObject({ card: "summary_large_image" });
    expect(cemMetadata.twitter).toMatchObject({ card: "summary_large_image" });
  });
});
