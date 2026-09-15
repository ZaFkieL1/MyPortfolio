import type { Metadata } from "next";
import { CaseStudy } from "@/components/work/case-study";
import { getProject } from "@/content/portfolio";

const project = getProject("cem-nicaragua");

export const metadata: Metadata = {
  title: "CEM Digital case study",
  description: project.summary,
  openGraph: {
    title: "CEM Digital case study — Henry Gonzalez",
    description: project.summary,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEM Digital case study — Henry Gonzalez",
    description: project.summary,
  },
};

export default function CemPage() {
  return <CaseStudy project={project} />;
}
