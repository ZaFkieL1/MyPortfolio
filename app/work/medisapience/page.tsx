import type { Metadata } from "next";
import { MedisapienceCaseStudy } from "@/components/work/medisapience-case-study";
import { getProject } from "@/content/portfolio";

const project = getProject("medisapience");

export const metadata: Metadata = {
  title: "MediSapience case study",
  description: project.summary,
  openGraph: {
    title: "MediSapience case study — Henry Gonzalez",
    description: project.summary,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediSapience case study — Henry Gonzalez",
    description: project.summary,
  },
};

export default function MediSapiencePage() {
  return <MedisapienceCaseStudy />;
}
