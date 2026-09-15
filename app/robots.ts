import type { MetadataRoute } from "next";
import { portfolioContent } from "@/content/portfolio";

export default function robots(): MetadataRoute.Robots {
  if (!portfolioContent.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
