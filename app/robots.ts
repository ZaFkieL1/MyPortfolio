import type { MetadataRoute } from "next";
import { contentReadiness } from "@/content/portfolio";
import { siteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  if (!contentReadiness.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
