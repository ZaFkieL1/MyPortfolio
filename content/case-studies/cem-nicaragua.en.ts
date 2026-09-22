import type { CaseStudyCta, CaseStudyHero, GridItem, ShotRecord, Tint } from "./types";

const hero: CaseStudyHero = {
  status: "Live product",
  kicker: "CEM Nicaragua case study",
  title: "One app for a medical course that ran on five platforms.",
  lead:
    "CEM Nicaragua trains doctors online. Announcements, daily questions, timed exams and recorded classes now live in one app on the student's phone — and the live class is one tap away.",
  action: { label: "Discuss a similar product", href: "/#contact" },
  architectureLink: { label: "See the architecture", href: "#cem-architecture" },
  facts: [
    { label: "Client", value: "CEM Nicaragua" },
    { label: "Timeline", value: "2026" },
    { label: "Role", value: "Full-stack product engineering" },
  ],
  website: { label: "cemnicaragua.com", href: "https://www.cemnicaragua.com" },
  highlight: { label: "In production", value: "Jan 2026" },
  note: { label: "Built with", value: "Next.js PWA, Django, PostgreSQL, Cloudflare R2" },
  visualCaption:
    "CEM Digital on a student's phone: one day of the course, captured from the running app on demonstration data.",
};

/**
 * Every phone capture shares this frame: a Pixel-class viewport at three times
 * the device pixels. Stated once so each row reserves its space before the
 * images arrive.
 */
const phoneFrame = { width: 1236, height: 2745 };

/**
 * The hero trio — a single day, in order: the class arrives in the feed, the
 * daily question is answered and waits, the answer releases itself at the hour
 * the teacher chose. Captures of the running app, not an illustration.
 */
const heroShots: ShotRecord[] = [
  {
    key: "feed",
    label: "The feed",
    alt:
      "The CEM Digital announcement feed on a phone: today's class with a Join the class button, and below it the announcement carrying the recording and the reading guide.",
  },
  {
    key: "waiting",
    label: "Answered, waiting",
    alt:
      "The question of the day after voting: the student's option is marked and a line reads that the result unlocks in 6 hours and 13 minutes.",
  },
  {
    key: "released",
    label: "The answer, on time",
    alt:
      "The same question after the release hour: the student's option is green and a line names the correct answer.",
  },
];

const brief = {
  title: "A course spread across five apps",
  lead:
    "CEM Nicaragua — Cursos Especializados de Medicina — runs online courses for doctors, taught live over Zoom.",
  body:
    "Each course lived in five places: Classroom for announcements, Microsoft Forms for exams, Drive for files and recordings, Zoom for the class and WhatsApp for reminders and questions through the day. Several logins, several bills, five places to check.",
};

const goals = [
  { title: "One place to look", body: "Announcements, questions, exams and recordings in one app, on the phone students already carry." },
  { title: "Keep the teacher's rhythm", body: "A question every day and the answer at a set hour, as on WhatsApp — without posting it by hand." },
  { title: "Exams that open on time", body: "Simulators written in advance that appear at the hour the team chose, with the timer already set." },
];

// Before → after, as described by CEM. Zoom stays: the live class is now one tap away.
const tools = {
  title: "Four tools retired, one kept",
  lead: "Zoom still hosts the class. Everything around it moved into CEM Digital.",
  listLabel: "Tools replaced by CEM Digital",
  retired: [
    { before: "Google Classroom", job: "Announcements", after: "Announcement feed with push" },
    { before: "WhatsApp", job: "Reminders and daily questions", after: "Question of the day, answer on schedule" },
    { before: "Microsoft Forms", job: "Quizzes and exams", after: "Timed simulators inside the app" },
    { before: "Google Drive", job: "Files and recorded classes", after: "Course repository with video preview" },
  ],
  kept: {
    before: "Zoom",
    job: "Live classes",
    after: "Kept — the announcement carries a Join class button, and the reminder opens the meeting",
  },
};

const sides: Array<{ title: string; tint: Tint; chips: string[] }> = [
  {
    title: "For students",
    tint: "sky",
    chips: ["Read announcements", "Join the live class", "Answer the daily question", "Sit timed simulators", "Watch recordings", "Get reminders"],
  },
  {
    title: "For the CEM team",
    tint: "peach",
    chips: ["Publish to a course", "Schedule the answer", "Import quizzes from Word", "Schedule exam openings", "Upload classes and files", "Enrol students"],
  },
];

const day = [
  {
    label: "Morning",
    title: "The teacher posts the question",
    body: "The correct option is marked when it is written, and the teacher picks when it unlocks. 6:00 PM unless they change it.",
  },
  {
    label: "During the day",
    title: "Students vote from the feed",
    body: "One vote each. Until the release, a countdown shows when their result arrives.",
  },
  {
    label: "At the chosen hour",
    title: "The answer releases itself",
    body: "Everyone sees if they were right, and those who voted get a push. No one has to be online to post it.",
  },
];

const release = {
  title: "The answer is on time, even if nothing runs",
  body:
    "The release time is saved with the question. Every time a phone asks for it, the server compares that time with now — so the answer appears at 6:00 PM even if the scheduler is late. The scheduler only sends the notification.",
  timelineLabel: "An example day",
  timeline: [
    { time: "8:00 AM", event: "Question published, release set for 6:00 PM" },
    { time: "11:46 AM", event: "María votes — “Your result unlocks in 6h 14m”" },
    { time: "6:00 PM", event: "The answer shows for everyone; voters get a push" },
  ],
};

const feedBand = {
  title: "Everything else goes through the same feed",
  body:
    "Class links, recordings, files and new simulators are announcements too, each with a push to the students of that course.",
};

/** The exam as the student meets it: the rules first, then the server's clock. */
const simulatorShots: ShotRecord[] = [
  {
    key: "brief",
    label: "Before starting",
    alt:
      "The simulator's opening screen: number of questions and time limit, and the rules — answers save as you go, you can close the page and come back, and the attempt submits itself when the time runs out.",
  },
  {
    key: "running",
    label: "The clock is the server's",
    alt:
      "The simulator under way: the remaining time counts down in the header beside the question number and how many are answered.",
  },
];
const simulatorShotsCaption =
  "The student sees the rules before the clock starts, and the clock itself belongs to the server.";

/** What the CEM team works with, on the same phone. */
const teamShots: ShotRecord[] = [
  {
    key: "panel",
    label: "The team's panel",
    alt:
      "The admin panel: courses, users, announcements, schedules, simulators and resources, each a row with its own description.",
  },
  {
    key: "question",
    label: "Writing the daily question",
    alt:
      "The announcement form in survey mode: the release hour defaults to 6:00 PM, the options are typed in, and the correct one is marked as it is written.",
  },
  {
    key: "simulators",
    label: "Scheduling an exam",
    alt:
      "The team's simulator list: one published and answerable, one scheduled with the date and hour it opens.",
  },
];
const teamShotsCaption =
  "The same phone runs the course: the answer's hour is set when the question is written, and an exam is published with the hour it opens.";

const simulators: GridItem[] = [
  {
    title: "Scheduled opening",
    body: "A simulator can be published with an opening time. Until then students cannot see it or start it, and they get a push when it opens.",
  },
  {
    title: "A clock the server owns",
    body: "Each attempt gets its deadline when it starts. The phone counts down against server time and submits at zero.",
  },
  {
    title: "Nothing lost on a phone",
    body: "Answers autosave as students go and when they leave the page, with a local draft that comes back on reload.",
  },
];

const decisions: GridItem[] = [
  {
    title: "Time rules without trusting a scheduler",
    details: [
      { label: "Problem", value: "Answers and exams must appear at an exact hour, even if a background job runs late." },
      { label: "Approach", value: "Release and opening times are stored in UTC and checked on every request. The scheduler only sends the notifications, and marks each one as sent." },
    ],
  },
  {
    title: "Publishing that stays fast",
    details: [
      { label: "Problem", value: "Sending pushes inside the publish request made posting to a large course slow and error-prone." },
      { label: "Approach", value: "Publishing writes a job to a durable queue. It is sent after the save commits, and a sweep retries anything left behind." },
    ],
  },
  {
    title: "Recorded classes without a big server",
    details: [
      { label: "Problem", value: "Class recordings are large files; routing them through the API would tie it up." },
      { label: "Approach", value: "The browser uploads straight to Cloudflare R2 in parts, with signed URLs. Every upload is audited." },
    ],
  },
];

const releaseDiagram = {
  title: "Scheduled answer release",
  description: "A daily question keeps its answer hidden until the release time, checked on every request.",
  chart: String.raw`
flowchart TB
  A[Teacher publishes question and release time] --> B[Server resolves the next 6:00 PM in Managua, stored in UTC]
  B --> C[Students vote, one vote each]
  C --> D{Request after the release time?}
  D -->|No| E[Hide the correct option and show a countdown]
  D -->|Yes| F[Return the correct option and the student's result]
  G[Scheduler, every minute] --> H[Push results to voters, once]
`,
  steps: [
    "The teacher publishes the question with its correct option and a release time.",
    "The server resolves the next occurrence of that time in Managua and stores it in UTC.",
    "Students vote once each.",
    "Before the release time, the API hides the correct option and the client shows a countdown.",
    "After it, the API returns the correct option and whether each student was right.",
    "A scheduler that runs every minute pushes the results to voters once.",
  ],
};

const operations: GridItem[] = [
  {
    title: "Quizzes from a Word file",
    body: "Upload a .docx where the highlighted option is the right one. It comes back as a draft to review before publishing.",
  },
  {
    title: "Results per question",
    body: "Success rate for each question, how the options split, who has not started, and a CSV export that opens in Excel.",
  },
  {
    title: "A second chance, on purpose",
    body: "Staff can reopen an attempt with extra minutes when a student lost their connection.",
  },
  {
    title: "Permissions per course",
    body: "Instructors publish announcements and schedules; each course gets its own folder, and students only see the folders they were given.",
  },
];

const architectureDiagram = {
  title: "CEM Digital system architecture",
  description: "Production boundaries from the audited frontend, backend, storage and deployment setup.",
  chart: String.raw`
flowchart LR
  subgraph Phone[Student and staff phone]
    PWA[Next.js 16 + React 19 PWA]
    SW[Service worker: offline + push]
  end

  VERCEL[Vercel delivery]
  subgraph Railway[Railway]
    API[Django 6 + DRF]
    CRON[Scheduler, every minute]
  end

  DB[(PostgreSQL)]
  R2[(Cloudflare R2)]
  PUSH[Web Push]
  MAIL[Resend email codes]
  ZOOM[Zoom live class]

  VERCEL --> PWA
  PWA <-->|Token auth| API
  PWA -->|Direct multipart upload| R2
  R2 -->|Signed URLs| PWA
  API <--> DB
  API --> R2
  API --> MAIL
  CRON <--> DB
  CRON --> PUSH
  API --> PUSH
  PUSH --> SW
  SW -->|Class reminder tap| ZOOM
`,
  steps: [
    "Vercel delivers the Next.js and React app, which students install to their home screen as a PWA.",
    "A service worker keeps the app usable offline and receives push notifications.",
    "The Django REST API on Railway authenticates each request and stores courses, announcements, questions and attempts in PostgreSQL.",
    "Files and class recordings upload directly from the browser to Cloudflare R2 and play back through signed URLs.",
    "A scheduler that runs every minute sends class reminders, released results and simulator openings as Web Push.",
    "Tapping the last class reminder opens the Zoom meeting directly.",
    "Resend delivers the email codes used to activate accounts and reset passwords.",
  ],
};

const reminders = [
  { value: "30 · 10 · 0 min", label: "Push reminders before each live class; the last one opens Zoom" },
  { value: "15 s", label: "Grace for answers sent as the exam timer reaches zero" },
];

const milestones = [
  { date: "Jan 2026", title: "In production", body: "Courses, users and announcements, a week after the first commit." },
  { date: "Mar 2026", title: "Question of the day", body: "Polls with a correct answer and a scheduled release." },
  { date: "May 2026", title: "An app on the phone", body: "Direct uploads to R2, install as an app, onboarding and push." },
  { date: "Aug 2026", title: "Simulators in the app", body: "Timed exams, attempt history and filters replaced external forms." },
];

const afterLaunch = [
  "Password reset by email", "Question of the day", "Scheduled answers", "Direct uploads to R2",
  "Install as an app", "Onboarding", "Schedule redesign", "Search", "Sign-in with email codes",
  "Simulators in the app", "Attempt history", "Durable push queue",
];

const quality = {
  stats: [
    { value: "93", label: "Backend tests across five modules" },
    { value: "37", label: "End-to-end browser tests, desktop and phone" },
  ],
  testedAreas: [
    "Exam timer", "Autosave and recovery", "Double submit", "Scheduled opening", "Word import",
    "Results and export", "Notifications", "Offline mode", "Submitting from a phone",
  ],
};

const method = [
  { title: "Built around how CEM teaches", body: "The daily question and the 6:00 PM answer were the teacher's habit. The app keeps it and does the posting." },
  { title: "Tested the way students use it", body: "End-to-end tests run the whole stack on a phone profile, in Managua time and Spanish." },
  { title: "Comments that explain the why", body: "Fixes record the incident behind them, so the next person can change the code safely." },
];

const outcome = {
  title: "What changed for CEM",
  lead: "Classroom, Forms, Drive and WhatsApp retired. Only Zoom remains, one tap from the app.",
  body:
    "Students follow a course from one installable app. The team publishes, schedules and grades from the same place. More than 500 doctors have been trained by CEM.",
  // The one figure CEM publishes itself; usage inside the app is still theirs to release.
  source: "Figure published by CEM on cemnicaragua.com.",
};

const closing = {
  title: "A course is easier to follow from one place",
  intro:
    "Announcements, questions, simulators and files share one feed, one login and one set of notifications.",
  technology: [
    "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "PWA + Web Push", "Django 6",
    "Django REST Framework", "PostgreSQL", "Cloudflare R2", "Resend", "Vercel", "Railway", "Playwright",
  ],
};

const cta: CaseStudyCta = {
  title: "Running your courses on too many tools?",
  body: "I build web apps that bring what students see and the work behind it into one place.",
  action: { label: "Let's talk about your project", href: "/#contact" },
  next: { title: "MediSapience", href: "/work/medisapience" },
};


/**
 * The headings the page prints over each section, and the small labels the layout needs.
 * They used to sit in `components/work/cem-case-study.tsx`; they live here so the component
 * holds no words of its own and each language supplies its own.
 */
const sections = {
  sides: { title: "One app, two sides of the course" },
  loop: {
    title: "The daily question, kept and automated",
    lead: "The rhythm the teacher had on WhatsApp, without posting the answer by hand.",
  },
  simulators: {
    title: "Exams that open on their own",
    lead: "Microsoft Forms became timed simulators the team schedules in advance.",
  },
  decisions: {
    title: "The technical work behind a punctual course",
    lead: "Three decisions made the timing and the files dependable.",
  },
  operations: {
    title: "Tools for the team that runs it",
    lead: "Writing, grading and support happen in the app, not in spreadsheets.",
  },
  architecture: {
    title: "A phone app on a small, dependable stack",
    lead: "The app installs from the browser; the API, database and files each do one job.",
  },
  evolution: {
    title: "How the product grew",
    lead: "The first release replaced the announcements. The rest followed, course by course.",
  },
  quality: {
    title: "How it's tested",
    lead: "Exams and their timing have the most tests, because that is where a bug costs a student.",
  },
  method: { title: "How I worked" },
};

const labels = {
  addedAfterLaunch: "Added after launch, in order",
  coveredAreas: "Covered areas",
  technology: "Technology",
};

/**
 * Every published word and figure of the CEM Digital case study. The component in
 * `components/work/cem-case-study.tsx` only arranges these records. There is no
 * testimonial record: CEM has not approved a quote, so the section is omitted.
 */
export const enCemCaseStudy = {
  hero,
  sections,
  labels,
  phoneFrame,
  heroShots,
  simulatorShots,
  simulatorShotsCaption,
  teamShots,
  teamShotsCaption,
  brief,
  goals,
  tools,
  sides,
  day,
  release,
  feedBand,
  simulators,
  decisions,
  releaseDiagram,
  operations,
  architectureDiagram,
  reminders,
  milestones,
  afterLaunch,
  quality,
  method,
  outcome,
  closing,
  cta,
};

/** The contract the Spanish module has to fill, derived from the English one. */
export type CemCaseStudy = typeof enCemCaseStudy;
