import readiness from "./readiness.json";

export type ContentReadiness = "mock" | "verified";

export type ProjectSlug = "medisapience" | "cem-nicaragua";

export type Project = {
  slug: ProjectSlug;
  index: string;
  name: string;
  shortName: string;
  category: string;
  status: string;
  platform: string;
  role: string;
  year: string;
  summary: string;
  overview: string;
  clientContext: string;
  challenge: string;
  solution: string;
  features: Array<{ title: string; description: string }>;
  engineering: Array<{ title: string; description: string }>;
  architecture: Array<{ label: string; detail: string }>;
  results: string;
  technologies: string[];
  metrics: Array<{
    value: string;
    label: string;
    context?: string;
    source: string | null;
    approved: boolean;
  }>;
  testimonial: null | {
    quote: string;
    name: string;
    role: string;
  };
  liveUrl: string | null;
  media: Array<{
    kind: "illustration" | "screenshot";
    label: string;
    caption: string;
  }>;
};

const projects: Project[] = [
  {
    slug: "medisapience",
    index: "01",
    name: "MediSapience",
    shortName: "MS",
    category: "Medical education SaaS",
    status: "In production",
    platform: "Web application",
    role: "Full-stack product engineering",
    year: "Preview",
    summary:
      "A production platform that brings medical learning, assessments, administration, and reporting into one coherent product.",
    overview:
      "MediSapience supports the operational side of medical education: structured learning, assessment workflows, learner management, and the visibility administrators need to run the product with confidence.",
    clientContext:
      "The approved case-study narrative will identify the client context, audience, engagement length, and Henry’s exact ownership. This preview currently reflects only the confirmed product category and production status.",
    challenge:
      "Medical education combines content-heavy learning experiences with high-stakes assessment and administration. The product needed to make those workflows clear for learners while giving operators dependable control behind the scenes.",
    solution:
      "The provisional solution narrative centers the complete workflow in a single product: learning content, evaluations, account administration, and useful reporting designed as connected parts rather than isolated features.",
    features: [
      {
        title: "Assessment workflows",
        description:
          "Structured evaluation experiences with clear progress, answer states, and review paths.",
      },
      {
        title: "Learning operations",
        description:
          "A coherent space for organizing educational material and the work around it.",
      },
      {
        title: "Administration",
        description:
          "Operational controls for people, access, content, and day-to-day product management.",
      },
      {
        title: "Reporting",
        description:
          "Product visibility that helps teams understand participation and learning activity.",
      },
    ],
    engineering: [
      {
        title: "Reliable assessment state",
        description:
          "Keep progress and answer state consistent across the learner experience and administrative records.",
      },
      {
        title: "Role-aware product surfaces",
        description:
          "Serve learners and operators from one system without exposing unnecessary complexity to either audience.",
      },
      {
        title: "Production operations",
        description:
          "Design the product around deployability, maintainability, and ongoing iteration—not only the initial release.",
      },
    ],
    architecture: [
      { label: "Product interface", detail: "Learner and administration experiences" },
      { label: "Application layer", detail: "Business rules, permissions, and workflows" },
      { label: "Data and files", detail: "Structured records and managed product assets" },
      { label: "Delivery", detail: "Deployment, monitoring, and iterative releases" },
    ],
    results:
      "Verified results and measurable outcomes are intentionally withheld until supporting evidence is approved. The product’s confirmed production status is the only result stated in this preview.",
    technologies: ["Next.js", "React", "TypeScript", "Django", "PostgreSQL", "Cloud infrastructure"],
    metrics: [],
    testimonial: null,
    liveUrl: null,
    media: [
      {
        kind: "illustration",
        label: "Learning dashboard",
        caption: "Illustrative product UI — replace with an approved MediSapience capture.",
      },
      {
        kind: "illustration",
        label: "Assessment experience",
        caption: "Illustrative product UI — not a production screenshot.",
      },
    ],
  },
  {
    slug: "cem-nicaragua",
    index: "02",
    name: "CEM Digital",
    shortName: "CEM",
    category: "Education and operations platform",
    status: "In production",
    platform: "Institutional site + web application",
    role: "Full-stack product engineering",
    year: "Preview",
    summary:
      "An institutional and operational platform for CEM Nicaragua, connecting public information with the workflows behind its education programs.",
    overview:
      "CEM Digital combines an outward-facing institutional presence with a working application for courses, announcements, schedules, resources, assessments, and administration.",
    clientContext:
      "CEM Nicaragua is a real organization with educational and administrative needs. Exact engagement details, audiences, and ownership boundaries remain provisional until the final content review.",
    challenge:
      "Information and operational tasks lived across different touchpoints. The platform needed to make public communication easier while giving the organization one dependable place for recurring education workflows.",
    solution:
      "The provisional narrative presents one connected digital service: a clear institutional front door backed by an application that organizes courses, notices, schedules, resources, evaluations, and administration.",
    features: [
      {
        title: "Course management",
        description:
          "Organized program information and the operational tools needed to keep courses current.",
      },
      {
        title: "Announcements and schedules",
        description:
          "Timely updates and shared calendars designed around the organization’s recurring communication.",
      },
      {
        title: "Learning resources",
        description:
          "A structured home for materials that people can find without navigating disconnected channels.",
      },
      {
        title: "Assessments and administration",
        description:
          "Evaluation workflows and the controls required to operate them as part of the wider platform.",
      },
    ],
    engineering: [
      {
        title: "One product, two contexts",
        description:
          "Balance a public institutional experience with authenticated operational workflows in a coherent system.",
      },
      {
        title: "Information that stays usable",
        description:
          "Structure changing schedules, announcements, course data, and resources so each remains easy to maintain.",
      },
      {
        title: "Sustainable administration",
        description:
          "Turn recurring organizational work into manageable product flows with clear permissions and ownership.",
      },
    ],
    architecture: [
      { label: "Public experience", detail: "Institutional information and discovery" },
      { label: "Member application", detail: "Education and operational workflows" },
      { label: "Administration", detail: "Content, access, schedules, and evaluation controls" },
      { label: "Shared foundation", detail: "Application services, data, files, and delivery" },
    ],
    results:
      "Verified adoption and operational outcomes are intentionally withheld until the client approves the evidence. This preview states only the confirmed facts: a real organization and a production platform.",
    technologies: ["Next.js", "React", "TypeScript", "Django", "PostgreSQL", "Cloud infrastructure"],
    metrics: [],
    testimonial: null,
    liveUrl: null,
    media: [
      {
        kind: "illustration",
        label: "Program operations",
        caption: "Illustrative product UI — replace with an approved CEM capture.",
      },
      {
        kind: "illustration",
        label: "Institutional experience",
        caption: "Illustrative product UI — not a production screenshot.",
      },
    ],
  },
];

export const portfolioContent = {
  readiness: readiness.status as ContentReadiness,
  indexable: readiness.indexable,
  person: {
    name: "Henry Gonzalez",
    mark: "HG",
    title: "Full-Stack Developer / Product Engineer",
    location: "Nicaragua",
    availability: "Available for select freelance projects",
    email: "hello@example.com",
    linkedin: null,
    github: null,
    bio: "I build production web applications for businesses and organizations, covering the full path from requirements and product structure to frontend, backend, deployment, and ongoing improvement.",
  },
  hero: {
    statement: "I build digital products businesses can depend on.",
    supporting:
      "Full-stack product engineering for SaaS platforms, internal tools, and custom web applications—from requirements to production.",
  },
  services: [
    {
      title: "Custom web applications",
      description:
        "Internal tools, customer portals, management systems, and purpose-built software shaped around the way your business works.",
    },
    {
      title: "SaaS products",
      description:
        "MVPs and production platforms with the product architecture, permissions, integrations, and operating foundations they need.",
    },
    {
      title: "Business platforms",
      description:
        "Connected systems that replace fragmented forms, spreadsheets, and manual handoffs with a clear source of truth.",
    },
    {
      title: "Existing product development",
      description:
        "Feature delivery, integrations, architecture improvements, and reliable long-term support for products already in motion.",
    },
  ],
  process: [
    { title: "Understand", description: "Requirements, users, workflows, constraints, and the real business problem." },
    { title: "Design", description: "Product structure, experience, system architecture, and data model." },
    { title: "Build", description: "Frontend, backend, integrations, testing, and production-ready delivery." },
    { title: "Ship & improve", description: "Deployment, monitoring, maintenance, and focused iteration." },
  ],
  technology: [
    { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Python", "Django", "Django REST Framework"] },
    { label: "Data", items: ["PostgreSQL", "Object storage"] },
    { label: "Delivery", items: ["Cloudflare", "Vercel", "Railway", "GitHub"] },
    { label: "Quality", items: ["Playwright", "Pytest", "Automated checks"] },
  ],
  testimonials: [] as Array<{ quote: string; name: string; role: string; approved: true }>,
  projects,
} as const;

export function getProject(slug: ProjectSlug) {
  const project = portfolioContent.projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Unknown project: ${slug}`);
  }

  return project;
}
