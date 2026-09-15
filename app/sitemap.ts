import type { MetadataRoute } from "next";

const routes = ["/", "/work/medisapience", "/work/cem-nicaragua"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return routes.map((route, index) => ({
    url: new URL(route, baseUrl).toString(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
