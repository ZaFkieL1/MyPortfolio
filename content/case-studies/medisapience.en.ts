import type { CaseStudyCta, CaseStudyHero, GridItem, Tint } from "./types";

const hero: CaseStudyHero = {
  status: "Live product",
  kicker: "MediSapience case study",
  title: "One platform for medical question banks and the team behind them.",
  lead:
    "Students practise, sit timed exams and see what to study next. The team publishes content, manages access and reviews payments — without calling a developer.",
  action: { label: "Discuss a similar product", href: "/#contact" },
  architectureLink: { label: "See the architecture", href: "#medisapience-architecture" },
  facts: [
    { label: "Client", value: "MediSapience" },
    { label: "Timeline", value: "2025–2026" },
    { label: "Role", value: "Full-stack product engineering" },
  ],
  website: { label: "medisapience.com", href: "https://medisapience.com" },
  highlight: { label: "Launched", value: "7 Jan 2026" },
  note: { label: "Built with", value: "Next.js, Django, PostgreSQL, WooCommerce" },
  visualCaption:
    "Illustrative product UI — a simplified, animated recreation of the session setup, not a production screenshot.",
};

const brief = {
  title: "A question bank is only useful when students can return to it",
  lead:
    "MediSapience is a study platform for doctors in Nicaragua preparing for the entrance exam to medical and surgical specialty programmes.",
  body:
    "The idea: turn a bank of exam questions into a product students buy, study with and come back to — and one the team can run without calling a developer.",
};

const goals = [
  { title: "Practise under exam conditions", body: "Timed Exam Mode that holds feedback until the end, like the real test." },
  { title: "Know what to study next", body: "Results by specialty, subject and topic instead of a single score." },
  { title: "Keep the content right", body: "A bank the team can correct and grow without losing past attempts." },
];

const sides: Array<{ title: string; tint: Tint; chips: string[] }> = [
  {
    title: "For students",
    tint: "sky",
    chips: ["Choose a bank", "Practice or Exam", "Review answers", "Track progress", "Keep studying"],
  },
  {
    title: "For the team behind MediSapience",
    tint: "peach",
    chips: ["Write and revise", "Import from Excel", "Manage plans", "Review payments", "Support users"],
  },
];

const loop = [
  {
    label: "Purchase",
    title: "Start with the right bank",
    body: "A completed order becomes the right account, bank and access period.",
  },
  {
    label: "Study",
    title: "Practice and Exam are not the same experience",
    body: "Practice shows feedback as you go. Exam Mode holds it until the end.",
  },
  {
    label: "Review",
    title: "Make the result useful",
    body: "Scores by subject and topic point to what to study next.",
  },
];

const practiceScreenshot = {
  width: 1648,
  height: 890,
  alt:
    "MediSapience in Practice mode: the student chose a wrong option, the correct answer is highlighted, and the feedback panel explains why with a bibliographic source and a link to the exact page to read.",
  caption: "Practice mode: instant feedback, the reasoning behind it, and a link to the page that covers it.",
};

const studyToday = {
  title: "What to study today",
  body:
    "A transparent score ranks each topic by four signals, then links the weakest ones straight to the pages to read. It starts after 50 answers or a baseline exam.",
  signals: [
    ["Error rate", "45%"],
    ["Mistakes", "20%"],
    ["Time", "20%"],
    ["Attempts", "15%"],
  ] as Array<[string, string]>,
  // The widest weight, used to scale the bars.
  signalScale: 45,
  screenshot: {
    width: 1904,
    height: 890,
    alt:
      "The What to study today screen: five priority topics ranked by performance, each with questions to review, recommended bibliography and buttons to read or practise.",
  },
};

/** One more capture of the running app, on demonstration data: what the student sees when reviewing. */
const statisticsScreenshot = {
  width: 1648,
  height: 890,
  alt:
    "The Statistics screen over a month: precision, self-assessment gap, time, questions and mock exams as headline figures, study habits below, and a line chart of accuracy over four weeks.",
  caption:
    "Review: the month in five figures, then the habits behind them and the curve they moved. Demonstration account — the figures are seeded study history, not a real student's.",
};

const operatingBand = {
  title: "The operating surface keeps the bank moving",
  body: "Questions, imports, versions, reports, users, plans and payments — all without touching the database.",
};

const banks = {
  title: "One engine, many question banks",
  lead: "A new bank is a row of configuration, not a new deployment.",
  levels: ["Bank", "Specialty", "Subject", "Topic", "Question"],
  scoped: ["Plans", "Premium access", "Exam sessions", "Study library", "Payments", "Learning stats"],
  migrationNote:
    "The single-bank product became multi-bank through one migration: existing content moved into a base bank, and old premium flags became per-bank access.",
  mechanics: [
    {
      title: "Every request knows its bank",
      body: "One client-side interceptor adds the active bank to every API call. The server checks it and falls back to the base bank.",
    },
    {
      title: "Premium is per bank",
      body: "Buying one bank never unlocks another. Each store product maps to a plan, and each plan belongs to one bank.",
    },
    {
      title: "Private banks open by link",
      body: "Unlisted banks stay hidden until someone arrives with an opaque invite code. Typing a hidden bank's name into a request does nothing: the server only honours banks that were unlocked.",
    },
  ],
};

const decisions: GridItem[] = [
  {
    title: "Keep the history of a changing question bank",
    details: [
      { label: "Problem", value: "Questions get corrected after students have already answered them." },
      { label: "Approach", value: "Stable question keys, versioned content, and answers that record the version seen." },
    ],
  },
  {
    title: "Assemble sessions close to the data",
    details: [
      { label: "Problem", value: "The first version downloaded a whole bank to pick a few questions." },
      { label: "Approach", value: "The server filters by access and curriculum and sends only the session." },
    ],
  },
  {
    title: "Make a purchase mean the right access",
    details: [
      { label: "Problem", value: "WooCommerce knows what was paid, not what it unlocks." },
      { label: "Approach", value: "Orders map to a plan, and each plan to one bank. Unmapped products wait for review." },
    ],
  },
];

const sessionDiagram = {
  title: "Server-side session assembly",
  description: "A request becomes a scoped, persisted session before questions reach the browser.",
  chart: String.raw`
flowchart TB
  A[Session request] --> B[Authenticate and resolve bank]
  B --> C[Filter by access and curriculum]
  C --> D[Guarantee topic coverage]
  D --> E[Add due research probes]
  E --> F[Create ExamSession]
  F --> G[Return selected questions]
`,
  steps: [
    "Authenticate the student and resolve the selected bank.",
    "Filter by bank, access and curriculum.",
    "Guarantee coverage for the selected topics.",
    "Reserve due research probes without exposing their markers.",
    "Persist the ExamSession and return only the selected questions.",
  ],
};

const operations = [
  {
    title: "Bank transfers, checked by OCR",
    body: "A separate worker reads each receipt and checks amount, currency, date, account and reference. Staff make the final call, and a reference can only be credited once.",
  },
  {
    title: "See the app as a free student",
    body: "One switch lets an admin preview the product exactly as a free user sees it, without touching their own access.",
  },
  {
    title: "Support with the full account story",
    body: "Each user has a timeline of purchases, access grants and changes, and staff can grant access bank by bank.",
  },
];

const architectureDiagram = {
  title: "MediSapience system architecture",
  description: "Production boundaries from the audited frontend, backend, storage and deployment setup.",
  chart: String.raw`
flowchart LR
  subgraph Browser[Student and admin browser]
    UI[Next.js 15 + React 19]
    PDF[PDF.js reader]
    AUTH[Firebase Auth SDK]
  end

  VERCEL[Vercel delivery]
  subgraph Railway[Railway]
    API[Django 5 + DRF]
    WORKER[Payment worker + OCR]
  end

  DB[(PostgreSQL)]
  STORE[(Google Cloud Storage)]
  CDN[Cloudflare image CDN]
  WOO[WooCommerce]
  MAIL[Email + Web Push]

  VERCEL --> UI
  UI <-->|X-Bank-Slug| API
  UI --> PDF
  AUTH --> API
  API <--> DB
  API <--> STORE
  STORE --> CDN --> UI
  WOO -->|Completed order webhook| API
  WORKER <--> DB
  WORKER --> STORE
  API --> MAIL
`,
  steps: [
    "Vercel delivers the Next.js and React student and admin interface to the browser.",
    "PDF.js reads external study resources, and Firebase verifies identity before Django creates the application session.",
    "Every request carries the active bank; the Django REST API on Railway scopes product and study data in PostgreSQL to it.",
    "WooCommerce sends completed orders to the API through a webhook.",
    "Google Cloud Storage holds question images and private receipts; a Cloudflare Worker CDN serves question imagery.",
    "A separate Railway worker reads payment records, processes transfer receipts with OCR assistance and uses managed storage.",
    "The API sends transactional email and web push notifications.",
  ],
};

const performance = [
  { value: "1.16 → 0.22 MB", label: "A 400-question payload after GZip compression" },
  { value: "1 year", label: "Immutable cache on question images served through Cloudflare" },
];

const milestones = [
  { date: "Oct 2025", title: "First data model", body: "Questions, answers and exam sessions." },
  { date: "7 Jan 2026", title: "MVP launch", body: "Purchase, study and administration working end to end." },
  { date: "Jun 2026", title: "Multi-bank", body: "One migration turned a single bank into many." },
  { date: "Sep 2026", title: "Where it stands", body: "67 database migrations and 74 versioned frontend releases later." },
];

const afterLaunch = [
  "Question versioning", "Library per bank", "Transfers with OCR", "Per-bank Premium",
  "Support CRM", "Statistics", "What to study today", "Research study", "Server-side sessions",
  "Peer comparison", "Error capture and push alerts",
];

const quality = {
  stats: [
    { value: "23", label: "Backend test modules, one per area" },
    { value: "20", label: "End-to-end browser specs with Playwright" },
  ],
  testedAreas: [
    "Payments", "Store webhook", "Premium expiry", "Session assembly", "Bank invites",
    "Statistics", "Research study", "Support tools", "Auth and permissions",
  ],
};

const method = [
  { title: "A changelog for every release", body: "Each version records what changed and why, so the client can follow the product without reading code." },
  { title: "Testing before production", body: "A separate testing environment mirrors production; changes land there first." },
  { title: "Comments that explain the why", body: "The code records the reasoning behind each decision, so the next person can change it safely." },
];

const outcome = {
  title: "What changed after launch",
  lead: "41% of Premium subscribers passed the specialty entrance exam.",
  body:
    "Since the MVP, the platform added more banks, richer feedback, reporting, study recommendations and support for a research study.",
  source: "Figures published by MediSapience on medisapience.com.",
};

const closing = {
  title: "A product has to work for the people running it",
  intro:
    "Versioning, per-bank access, imports and payment review let each bank keep changing without breaking past attempts.",
  technology: [
    "Next.js 15", "React 19", "TypeScript", "Django 5", "Django REST Framework",
    "PostgreSQL", "WooCommerce", "PDF.js", "Vercel", "Railway", "Cloudflare Worker",
  ],
};

const cta: CaseStudyCta = {
  title: "Building a product like this?",
  body: "I build web apps that connect what customers see to the operations behind it.",
  action: { label: "Let's talk about your project", href: "/#contact" },
  next: { title: "CEM Digital", href: "/work/cem-nicaragua" },
};


/**
 * The headings the page prints over each section, and the small labels the layout needs.
 * They used to sit in `components/work/medisapience-case-study.tsx`; they live here so the
 * component holds no words of its own and each language supplies its own.
 */
const sections = {
  sides: { title: "One product, two operating realities" },
  loop: { title: "The smallest useful loop", lead: "The MVP made one path work end to end." },
  decisions: {
    title: "The technical work behind a credible study session",
    lead: "Three decisions shaped the data model, sessions and checkout.",
  },
  operations: {
    title: "Tools for the team that runs it",
    lead: "Routine payments and support stay out of the database and out of my inbox.",
  },
  architecture: {
    title: "Boundaries that keep the system reliable",
    lead: "Study, checkout and background work stay separate, so each does one job.",
  },
  evolution: {
    title: "How the product grew",
    lead: "The launch was the start. Most of the product was built after it, in production.",
  },
  quality: {
    title: "How it's tested",
    lead: "The parts that move money or access have their own test suites.",
  },
  method: { title: "How I worked" },
};

const labels = {
  signalWeights: "Recommendation weights",
  contentHierarchy: "Content hierarchy",
  scopedToBank: "Scoped to each bank",
  addedAfterLaunch: "Added after launch, in order",
  coveredAreas: "Covered areas",
  technology: "Technology",
};

/**
 * Every published word and figure of the MediSapience case study. The component in
 * `components/work/medisapience-case-study.tsx` only arranges these records.
 */
export const enMedisapienceCaseStudy = {
  hero,
  sections,
  labels,
  statisticsScreenshot,
  brief,
  goals,
  sides,
  loop,
  practiceScreenshot,
  studyToday,
  operatingBand,
  banks,
  decisions,
  sessionDiagram,
  operations,
  architectureDiagram,
  performance,
  milestones,
  afterLaunch,
  quality,
  method,
  outcome,
  closing,
  cta,
};

/** The contract the Spanish module has to fill, derived from the English one. */
export type MedisapienceCaseStudy = typeof enMedisapienceCaseStudy;
