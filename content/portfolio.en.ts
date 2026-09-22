import type { PortfolioContent, Project, SideProject } from "./types";

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
    year: "2025–2026",
    summary:
      "A production platform that brings medical learning, assessments, administration, and reporting into one coherent product.",
    overview:
      "MediSapience turns a bank of exam questions into a product students buy, study with and come back to: practice with instant feedback, timed exams, results by subject and topic, and an operating surface the team runs without a developer.",
    clientContext:
      "MediSapience is a study platform for doctors in Nicaragua preparing for the entrance exam to medical and surgical specialty programmes. Henry built and still develops the platform end to end, from the data model to production.",
    challenge:
      "Medical education combines content-heavy learning experiences with high-stakes assessment and administration. The product needed to make those workflows clear for learners while giving operators dependable control behind the scenes.",
    solution:
      "One engine serving many question banks: purchase maps to per-bank access, sessions are assembled on the server, question content is versioned so past attempts survive corrections, and payments, imports and support all happen in the admin surface.",
    features: [
      {
        title: "Practice and Exam Mode",
        description:
          "Practice shows feedback, its reasoning and the page to read as the student goes; Exam Mode holds all of it until the end.",
      },
      {
        title: "What to study today",
        description:
          "A transparent score ranks each topic by error rate, mistakes, time and attempts, then links the weakest ones to the pages to read.",
      },
      {
        title: "Many question banks, one engine",
        description:
          "A new bank is configuration, not a deployment: content, plans, access, payments and stats are all scoped to it.",
      },
      {
        title: "An operating surface for the team",
        description:
          "Questions, Excel imports, versions, reports, users, plans and payment review — all without touching the database.",
      },
    ],
    engineering: [
      {
        title: "Keep the history of a changing question bank",
        description:
          "Stable question keys, versioned content and answers that record the version seen, so corrections never invalidate past attempts.",
      },
      {
        title: "Assemble sessions close to the data",
        description:
          "The server filters by access and curriculum and returns only the session, instead of shipping a whole bank to the browser.",
      },
      {
        title: "Make a purchase mean the right access",
        description:
          "Completed WooCommerce orders map to a plan, and each plan to one bank; unmapped products wait for review rather than guessing.",
      },
    ],
    architecture: [
      { label: "Browser", detail: "Next.js and React student and admin interface, delivered by Vercel" },
      { label: "API", detail: "Django REST Framework on Railway, scoping every request to the active bank" },
      { label: "Data and files", detail: "PostgreSQL, Google Cloud Storage, and a Cloudflare Worker image CDN" },
      { label: "Background work", detail: "A separate payment worker that reads transfer receipts with OCR" },
    ],
    results:
      "In production since 7 January 2026, now serving multiple question banks with reporting, study recommendations and support for a research study. Every published figure appears in the metric records below, each with its source.",
    technologies: [
      "Next.js", "React", "TypeScript", "Django", "Django REST Framework",
      "PostgreSQL", "WooCommerce", "Vercel", "Railway", "Cloudflare",
    ],
    // Published by MediSapience on medisapience.com and approved for this portfolio.
    metrics: [
      {
        value: "20,641+",
        label: "Answer attempts",
        source: "Published by MediSapience on medisapience.com",
        approved: true,
      },
      {
        value: "310+",
        label: "Subscribers",
        source: "Published by MediSapience on medisapience.com",
        approved: true,
      },
      {
        value: "41%",
        label: "Premium subscribers who passed",
        context: "The specialty entrance exam",
        source: "Published by MediSapience on medisapience.com",
        approved: true,
      },
      {
        value: "1 year",
        label: "In service",
        source: "Launched 7 January 2026",
        approved: true,
      },
    ],
    testimonial: {
      quote:
        "When we started, I had a clear vision of the product but not of how to build it. Henry didn’t just code what I asked for: he questioned alternatives, researched solutions and helped me decide with the product’s future in mind. We can start from an idea, a document or a mockup, and he turns it into a working implementation. MediSapience grew from a simple prototype into a multi-bank platform with personalized study and analytics, without losing the data we had already generated.",
      highlight:
        "I found someone who doesn’t just execute an idea, but gets involved in understanding it, questioning it and finding the best way to make it real.",
      name: "Dr. Yasser Silva Morales",
      role: "Founder, MediSapience",
      initials: "YS",
      profile: {
        href: "https://www.linkedin.com/in/doctoryassersilvamorales/",
        label: "View Dr. Yasser Silva Morales on LinkedIn",
      },
      approved: true,
    },
    testimonialSection: {
      title: "From the client.",
      intro:
        "What it was like to build MediSapience together, from the first release to the platform it is today.",
    },
    liveUrl: "https://medisapience.com",
    media: [
      {
        kind: "screenshot",
        label: "Practice mode feedback",
        caption:
          "Practice mode: instant feedback, the reasoning behind it, and a link to the page that covers it.",
      },
      {
        kind: "screenshot",
        label: "What to study today",
        caption:
          "Five priority topics ranked by performance, each with questions to review and recommended bibliography.",
      },
    ],
  },
  {
    slug: "cem-nicaragua",
    index: "02",
    name: "CEM Digital",
    shortName: "CEM",
    category: "Medical education app",
    status: "In production",
    platform: "Mobile-first web app (PWA)",
    role: "Full-stack product engineering",
    year: "2026",
    summary:
      "A mobile-first app that brought CEM Nicaragua's announcements, daily questions, timed exams and class recordings into one place.",
    overview:
      "CEM Digital is the app students of CEM Nicaragua install on their phones to follow a course: announcements with the live-class link, a question of the day, timed simulators, and a repository of files and recordings.",
    clientContext:
      "CEM Nicaragua (Cursos Especializados de Medicina) runs online courses for doctors, taught live over Zoom.",
    challenge:
      "Each course was spread across Google Classroom, Microsoft Forms, Google Drive, Zoom and WhatsApp, with separate logins, separate costs and five places to check.",
    solution:
      "One installable app replaced four of those tools. Announcements, daily questions with a scheduled answer, simulators that open at a set time, and course files share one feed and one set of notifications; Zoom stays one tap away.",
    features: [
      {
        title: "Announcement feed",
        description:
          "Course announcements with push notifications, attachments and a Join class button for the live session.",
      },
      {
        title: "Question of the day",
        description:
          "A poll with a correct answer that unlocks at the hour the teacher chooses, with a push to everyone who voted.",
      },
      {
        title: "Timed simulators",
        description:
          "Exams that open at a scheduled time, run on a server-owned clock and autosave on the phone.",
      },
      {
        title: "Course repository",
        description:
          "Files and recorded classes uploaded straight to Cloudflare R2 and previewed in the app.",
      },
    ],
    engineering: [
      {
        title: "Time rules on every request",
        description:
          "Answer releases and exam openings are checked against stored timestamps, so they happen on time even if a job runs late.",
      },
      {
        title: "A durable notification queue",
        description:
          "Publishing writes a push job that is sent after the save commits and retried by a sweep.",
      },
      {
        title: "Direct uploads",
        description:
          "Large recordings go from the browser to object storage in parts, never through the API.",
      },
    ],
    architecture: [
      { label: "Phone app", detail: "Next.js PWA with a service worker for offline and push" },
      { label: "API", detail: "Django REST Framework on Railway" },
      { label: "Data and files", detail: "PostgreSQL and Cloudflare R2" },
      { label: "Scheduler", detail: "Class reminders, released answers and exam openings" },
    ],
    results:
      "Classroom, Microsoft Forms, Google Drive and WhatsApp were retired; only Zoom remains. Usage figures are pending client approval.",
    technologies: ["Next.js", "React", "TypeScript", "Django", "PostgreSQL", "Cloudflare R2"],
    // No metric is published yet: CEM has not approved usage figures for release.
    metrics: [],
    testimonial: null,
    liveUrl: "https://www.cemnicaragua.com",
    media: [
      {
        kind: "illustration",
        label: "Question of the day",
        caption: "Illustrative product UI — a simplified recreation of the CEM Digital mobile app.",
      },
    ],
  },
];

const otherProjects: SideProject[] = [
  {
    index: "03",
    slug: "credora",
    name: "Credora",
    kind: "Credit-management SaaS",
    status: "In development",
    description: [
      "A platform for lending institutions in Nicaragua that closes the whole loan cycle in one system: application, approval, disbursement, instalment plan, collection route, arrears, restructuring and write-off.",
      "Behind that sit cash sessions, accounting, bank reconciliation, portfolio classification and an audit trail — with maker-checker approval on the operations that move money, and permissions that vary by institution, branch, role and field.",
    ],
    note: "A personal project. The repositories are private and there is no public deployment yet.",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    screenshots: [
      {
        src: "/work/credora-solicitudes.png",
        alt: "Credora's application inbox: submitted loan applications with their product, amount, branch and review state.",
        caption: "Applications arrive in one inbox and carry their product, requirements and guarantees through review.",
      },
      {
        src: "/work/credora-prestamos.png",
        alt: "A Credora loan detail showing the disbursed amount and the generated instalment plan.",
        caption: "Approval and disbursement generate the instalment plan the whole collection cycle runs on.",
      },
      {
        src: "/work/credora-cobranza.png",
        alt: "Credora's collection route for a day: customers to visit, instalments due and arrears.",
        caption: "The collection route is built from what is actually due, by zone and by officer.",
      },
      {
        src: "/work/credora-caja.png",
        alt: "A Credora cash session with its movements and closing balance.",
        caption: "Payments land in an open cash session that has to be reconciled before it closes.",
      },
      {
        src: "/work/credora-cartera.png",
        alt: "Credora's portfolio classification by arrears bucket at a period close.",
        caption: "Period close classifies the portfolio into arrears buckets for provisioning and reporting.",
      },
    ],
  },
  {
    index: "04",
    slug: "kiseki-no-oto",
    name: "Kiseki no Oto",
    kind: "Net-label website",
    status: "In production",
    description: [
      "The site for a Colombian net-label releasing J-Core, built as a system that boots: the loading sequence hands off into the interface instead of sitting in front of it.",
      "Releases are scenes rather than a card grid — each one takes the viewport and retints the whole chassis with a hue sampled from its sleeve. Playback survives navigation, the scrubber draws the track’s real decoded waveform, and the label types its catalogue in a private console behind Google sign-in.",
    ],
    technologies: ["Astro", "React", "TypeScript", "Firestore", "Cloudflare R2", "Cloudflare Workers"],
    siteUrl: "https://kiseki-no-oto.com",
    sourceUrl: "https://github.com/ZaFkieL1/Kiseki-No-Oto-Website",
    screenshots: [
      {
        src: "/work/kiseki-boot.png",
        alt: "The Kiseki no Oto boot sequence: LABEL_OS checks the audio engine, visual engine and release database, then reports system ready.",
        caption: "The site boots instead of loading, and hands off on its own — nothing to press.",
      },
      {
        src: "/work/kiseki-system.png",
        alt: "The Kiseki no Oto identity page: the label lockup and statement on the left, the loaded record on the right.",
        caption: "Identity and the loaded record sit side by side, so the transport is never a page of its own.",
      },
      {
        src: "/work/kiseki-catalogue.png",
        alt: "A Kiseki no Oto release taking the full viewport, its sleeve artwork colouring the interface around it.",
        caption: "Each release owns a viewport and retints the chassis with a hue sampled from its sleeve.",
      },
      {
        src: "/work/kiseki-kernel.png",
        alt: "The KERNEL console where the label types its catalogue, behind Google sign-in.",
        caption: "KERNEL: the private console the label runs the catalogue from, on a separate chunk the public page never loads.",
      },
    ],
  },
];

export const enPortfolio: PortfolioContent = {
  person: {
    name: "Henry Gonzalez",
    mark: "HG",
    title: "Full-Stack Developer / Product Engineer",
    location: "Nicaragua",
    availability: "Available for select freelance projects",
    email: "hjosuegm0@gmail.com",
    linkedin: "https://www.linkedin.com/in/henry-gonzalez-a20258268/",
    github: "https://github.com/ZaFkieL1",
    bio: "I build production web applications for businesses and organizations, covering the full path from requirements and product structure to frontend, backend, deployment, and ongoing improvement.",
  },
  hero: {
    statement: "I build digital products businesses can depend on.",
    supporting:
      "Full-stack product engineering for SaaS platforms, internal tools, and custom web applications—from requirements to production.",
    system: {
      inputs: [
        { icon: "idea", title: "Your idea", detail: "Goals and constraints" },
        { icon: "workflow", title: "Workflows", detail: "How your team works" },
        { icon: "data", title: "Your data", detail: "Records, rules, systems" },
      ],
      hub: {
        title: "Product engineering",
        stages: ["Design", "Frontend", "Backend", "Deploy"],
      },
      outputs: [
        { icon: "browser", title: "Web application", detail: "Fast, accessible, typed" },
        { icon: "dashboard", title: "Internal tools", detail: "Dashboards and admin" },
        { icon: "plug", title: "APIs & integrations", detail: "Connected to your stack" },
      ],
    },
  },
  contact: {
    title: "Have a product in mind?",
    titleMuted: "Let’s turn the real workflow into a product.",
    body: "Share the problem, the people involved, and what a useful first release needs to achieve.",
    action: "Start a conversation",
    steps: [
      { title: "Share the problem", detail: "The workflow, the people, the goal" },
      { title: "Scope a first release", detail: "What it must do on day one" },
      { title: "Ship and improve", detail: "In production, then iterate" },
    ],
  },
  about: {
    title: "Hey, I’m Henry.",
    note: [
      "Both products on this page are still in production. MediSapience has been live since January 2026 and grew from a single question bank into many; CEM Digital replaced four of the five tools a course was running on.",
      "I work across product decisions and implementation detail, and I stay with a product after launch — in both case studies, most of the work happened after the first release.",
    ],
    facts: [
      { label: "Based in", value: "Nicaragua (UTC−6)" },
      { label: "Working with", value: "International and remote teams" },
      { label: "Focus", value: "Products, platforms, and custom software" },
    ],
    elsewhereLabel: "Elsewhere",
  },
  home: {
    work: { title: "Selected work." },
    services: {
      title: "What I build.",
      lead: "Focused product engineering for software that has a real job to do.",
    },
    process: {
      title: "From idea to production.",
      lead: "A direct path from business context to software people can use and teams can run.",
    },
    technology: {
      title: "Tools matched to the product.",
      lead: "The stack supports the work; it is not the work.",
    },
    figuresSource: "MediSapience, in production. Figures published on medisapience.com.",
    featuredScreenshotAlt:
      "MediSapience in Practice mode: instant feedback, the reasoning behind the answer and a link to the page to read.",
  },
  otherProjects,
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
  testimonials: [],
  projects,
  metadata: {
    siteTitle: "Henry Gonzalez — Full-Stack Product Engineer",
    titleTemplate: "%s — Henry Gonzalez",
    description:
      "Full-stack product engineering for SaaS platforms, internal tools, and custom web applications.",
    applicationName: "Henry Gonzalez Portfolio",
    keywords: ["Full-stack developer", "Product engineer", "SaaS development", "Custom web applications"],
    openGraphDescription: "Digital products built from requirements through production.",
    caseStudyTitle: (name) => `${name} case study`,
  },
};
