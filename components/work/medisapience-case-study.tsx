import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";
import { MermaidDiagram } from "@/components/content/mermaid-diagram";
import { Footer } from "@/components/layout/footer";
import { PreviewBanner } from "@/components/layout/preview-banner";
import { Navbar } from "@/components/navigation/navbar";
import { ProductVisual } from "@/components/product/product-visual";
import { ButtonLink } from "@/components/ui/button-link";
import styles from "./medisapience-case-study.module.css";

const productFlows = [
  {
    title: "Practice with feedback that teaches",
    body: "Students filter a bank by specialty, subject or topic, answer questions and see explanations while they practise. Feedback can include rich content, option-specific explanations, images, links and references.",
    detail:
      "A limited free preview reveals full explanations during a session so students can understand the value of Practice before upgrading.",
  },
  {
    title: "Exams with a different rhythm",
    body: "Exam Mode holds feedback until the session finishes. Students can navigate or skip questions, work against a visible timer and review their results afterward.",
    detail:
      "Question order, answers and timing persist in the browser across a refresh so an interruption does not immediately erase the attempt.",
  },
  {
    title: "A next step after the score",
    body: "Performance by subject and topic, trends and error patterns help students understand their history. “What to study today” turns errors, attempts and time spent into an explainable topic priority.",
    detail:
      "When there is too little history, the product shows progress toward eligibility instead of presenting a fabricated recommendation.",
  },
  {
    title: "An admin experience for the actual work",
    body: "The team can create and edit content, import questions from Excel, manage versions, review reports, organise library resources and handle users, plans and access.",
    detail:
      "Routine publishing and operational changes happen through a dedicated product surface rather than direct database edits.",
  },
];

const engineeringDecisions = [
  {
    title: "Keep the history of a changing question bank",
    body: "Each question has a stable editorial key. Successive content versions are recorded, and every answer keeps the version the student saw. Deleted questions remain recoverable; restoring an earlier version creates a new version instead of rewriting history.",
    impact:
      "The team can correct live content while attempts and reports remain tied to their original context.",
  },
  {
    title: "Assemble study sessions on the server",
    body: "The normal session path filters by bank, access and curriculum on the server, guarantees selected-topic coverage and sends only the assembled questions to the browser. Research measurement items can be inserted without exposing their markers.",
    impact:
      "Selection rules sit close to the data, and the regular study path no longer downloads an entire question bank before filtering.",
  },
  {
    title: "Translate a purchase into the right access",
    body: "WooCommerce owns checkout while MediSapience owns question-bank entitlements. A completed mapped order can find or create an account and extend access to the purchased bank without discarding unused renewal time.",
    impact:
      "Commerce and authorisation remain separate systems without losing which bank and access period the student purchased.",
  },
];

const sessionChart = String.raw`
flowchart LR
  A[Session request] --> B[Authenticate and resolve bank]
  B --> C[Filter by access and curriculum]
  C --> D[Guarantee topic coverage]
  D --> E[Add due research probes]
  E --> F[Create ExamSession]
  F --> G[Return selected questions]
`;

const architectureChart = String.raw`
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
  UI <--> API
  UI --> PDF
  AUTH --> API
  API <--> DB
  API <--> STORE
  STORE --> CDN --> UI
  WOO -->|Completed order webhook| API
  WORKER <--> DB
  WORKER --> STORE
  API --> MAIL
`;

export function MedisapienceCaseStudy() {
  return (
    <>
      <Navbar />
      <PreviewBanner />
      <main id="main-content" className={`case-study ${styles.page}`}>
        <header className={`case-hero container ${styles.hero}`}>
          <Link className="back-link" href="/#work">← All work</Link>
          <div className={styles.heroGrid}>
            <p className={styles.projectName}>MediSapience · Medical education</p>
            <div className={styles.heroCopy}>
              <h1>From a medical QBank MVP to a platform students can study with and its team can run</h1>
              <p>
                MediSapience brings medical question banks, practice sessions, timed exams,
                feedback and study resources into one product. I built the student experience
                and the tools behind it, then developed the platform further as the client
                learned from real use.
              </p>
              <ButtonLink href="/#contact" variant="primary">
                Discuss a similar product <ArrowUpRightIcon />
              </ButtonLink>
            </div>
          </div>
          <dl className="case-facts">
            <div><dt>Client</dt><dd>MediSapience</dd></div>
            <div><dt>Role</dt><dd>Product development, frontend, backend and deployment</dd></div>
            <div><dt>Timeline</dt><dd>2025–2026</dd></div>
            <div><dt>Status</dt><dd>Live product</dd></div>
          </dl>
        </header>

        <div className="container case-lead-visual">
          <ProductVisual
            project="medisapience"
            caption="Illustrative product UI — not a production screenshot."
          />
        </div>

        <section className={`case-section container ${styles.glance}`} aria-labelledby="product-glance">
          <div className="case-section__heading">
            <h2 id="product-glance">The product at a glance</h2>
            <p>One product connects the study experience to the work required to operate it.</p>
          </div>
          <div className={styles.audienceGrid}>
            <article>
              <h3>For students</h3>
              <p>
                Choose a question bank, configure a Practice or Exam session, review answers,
                track performance and continue with relevant study material.
              </p>
            </article>
            <article>
              <h3>For the team behind MediSapience</h3>
              <p>
                Create and revise questions, import content, manage access and plans, review
                payments and support users through a dedicated admin portal.
              </p>
            </article>
          </div>
          <p className={styles.distinction}>
            <strong>Practice reveals feedback as students work.</strong> Exam Mode holds feedback
            until the session ends.
          </p>
        </section>

        <section className={`case-section container case-section--split ${styles.context}`} aria-labelledby="medisapience-overview">
          <h2 id="medisapience-overview">Overview</h2>
          <div className="case-section__body">
            <p className="lead-copy">
              The client wanted to turn a medical question bank into a usable paid product.
            </p>
            <p>
              Students needed to practise by subject, take exams and receive educational
              feedback. The team needed to publish questions and manage customers without
              routing every content or access change through a developer.
            </p>
            <p>
              Checkout lived in WooCommerce while studying and access lived in MediSapience.
              We prioritised the essential loop for the MVP: purchase access, enter the product,
              study and manage the content that makes studying useful.
            </p>
          </div>
        </section>

        <section className={`case-section container ${styles.challengeRole}`} aria-label="Challenge and role">
          <article>
            <h2>The challenge</h2>
            <p>This was more than a quiz interface. The platform needed to:</p>
            <ul>
              <li>Scope each student’s access to the bank they purchased.</li>
              <li>Give Practice and Exam distinct feedback and result behaviour.</li>
              <li>Let live content change without making historic answers ambiguous.</li>
              <li>Convert commerce events into access while keeping exceptions reviewable.</li>
              <li>Offer useful performance data without turning one score into a study plan.</li>
            </ul>
          </article>
          <article>
            <h2>My role</h2>
            <p>
              I developed the student frontend, Django API, data model, administrative tools
              and deployment configuration. I also worked with the client on feature priorities
              and subsequent changes as the product moved beyond its first release.
            </p>
          </article>
        </section>

        <section className={`case-section ${styles.solution}`} aria-labelledby="medisapience-solution">
          <div className="container">
            <div className="case-section__heading">
              <h2 id="medisapience-solution">The solution</h2>
              <p>A connected study and operations platform, built to evolve after launch.</p>
            </div>
            <p className={styles.solutionLead}>
              Students can configure sessions, receive mode-specific feedback, review previous
              attempts and use performance data to choose what to study next. The team can manage
              questions, users, plans, access, resources and payments from its own portal.
            </p>
            <ProductVisual
              project="medisapience"
              caption="Illustrative product UI — not a production screenshot."
            />
          </div>
        </section>

        <section className={`case-section container ${styles.productWorks}`} aria-labelledby="product-works">
          <div className="case-section__heading">
            <h2 id="product-works">How the product works</h2>
            <p>Four connected surfaces shape the day-to-day experience.</p>
          </div>
          <div className={styles.flowList}>
            {productFlows.map((flow, index) => (
              <article key={flow.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{flow.title}</h3>
                  <p>{flow.body}</p>
                  <p className={styles.flowDetail}>{flow.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-engineering" aria-labelledby="medisapience-engineering">
          <div className="container">
            <div className="case-section__heading">
              <h2 id="medisapience-engineering">Engineering challenges</h2>
              <p>Three decisions kept product behaviour understandable as the system grew.</p>
            </div>
            <div className={styles.decisionList}>
              {engineeringDecisions.map((decision, index) => (
                <article key={decision.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{decision.title}</h3>
                  <div>
                    <p>{decision.body}</p>
                    <p className={styles.impact}><strong>Why it mattered:</strong> {decision.impact}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.sessionDiagram}>
              <MermaidDiagram
                title="Server-side session assembly"
                description="A request becomes a scoped, persisted session before the selected questions reach the browser."
                chart={sessionChart}
                steps={[
                  "Authenticate the student and resolve the selected bank.",
                  "Filter by bank, access and curriculum.",
                  "Guarantee coverage for the selected topics.",
                  "Reserve due research probes without exposing their markers.",
                  "Persist the ExamSession and return only the selected questions.",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="case-section architecture-section" aria-labelledby="medisapience-architecture">
          <div className="container">
            <div className="case-section__heading">
              <h2 id="medisapience-architecture">System architecture</h2>
              <p>
                The student and admin surfaces share an API while commerce, files and background
                payment work retain clear boundaries.
              </p>
            </div>
            <p className={styles.architectureLead}>
              Next.js and React run the browser experience. Django REST Framework owns product
              rules and persists study history, content, accounts and access in PostgreSQL.
              WooCommerce sends completed orders to the API; managed storage, an image CDN and a
              separate payment worker support files and transfer receipts.
            </p>
            <MermaidDiagram
              title="MediSapience system architecture"
              description="Verified production boundaries based on the audited frontend, backend, storage and deployment configuration."
              chart={architectureChart}
              tone="dark"
              steps={[
                "Vercel delivers the Next.js and React student and admin interface to the browser.",
                "PDF.js reads external study resources, and Firebase verifies identity before Django creates the application session.",
                "The interface communicates with the Django REST API on Railway, which stores product and study data in PostgreSQL.",
                "WooCommerce sends completed orders to the API through a webhook.",
                "Google Cloud Storage holds question images and private receipts; a Cloudflare Worker CDN serves question imagery.",
                "A separate Railway worker reads payment records, processes transfer receipts with OCR assistance and uses managed storage.",
                "The API sends transactional email and web push notifications.",
              ]}
            />
          </div>
        </section>

        <section className={`case-section container case-section--split ${styles.reliability}`} aria-labelledby="medisapience-reliability">
          <h2 id="medisapience-reliability">Reliability and testing</h2>
          <div className="case-section__body">
            <p className="lead-copy">The product protects context where a live study flow can easily lose it.</p>
            <ul>
              <li><CheckIcon /> Question versions preserve the content attached to past answers.</li>
              <li><CheckIcon /> Excel imports validate a complete batch before applying it.</li>
              <li><CheckIcon /> Access renewals extend the current period instead of replacing unused days.</li>
              <li><CheckIcon /> The baseline research flow can resume from server-side progress.</li>
              <li><CheckIcon /> Django and Playwright tests cover core study and operational workflows.</li>
            </ul>
          </div>
        </section>

        <section className={`case-section container case-section--split ${styles.results}`} aria-labelledby="medisapience-results">
          <h2 id="medisapience-results">Results</h2>
          <div className="case-section__body">
            <p className="lead-copy">A launchable MVP became a broader live product.</p>
            <p>
              The client launched the initial product on 7 January 2026 and later confirmed that
              students had paid for Premium access. After the MVP, the platform expanded into
              multiple banks, richer feedback, reporting and administration, study recommendations
              and infrastructure for a research study.
            </p>
            <p>
              The result is a live student journey paired with the tools its team uses to operate
              the bank, with further work commissioned after the first release.
            </p>
          </div>
        </section>

        <section className="case-section container case-section--split" aria-labelledby="medisapience-technology">
          <h2 id="medisapience-technology">Technology</h2>
          <div className="tag-list">
            {[
              "Next.js 15", "React 19", "TypeScript", "Django 5", "Django REST Framework",
              "PostgreSQL", "WooCommerce", "PDF.js", "Vercel", "Railway", "Cloudflare Worker",
            ].map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </section>

        <section className="case-contact" aria-labelledby="medisapience-contact">
          <div className="container case-contact__inner">
            <div>
              <h2 id="medisapience-contact">Building a product that must work for users and the people running it?</h2>
              <p>I develop web applications that connect the customer experience to the operations behind it.</p>
            </div>
            <ButtonLink href="/#contact" variant="inverse">
              Let&apos;s talk about your project <ArrowUpRightIcon />
            </ButtonLink>
          </div>
        </section>

        <section className="next-project" aria-labelledby="medisapience-next">
          <Link href="/work/cem-nicaragua" className="container next-project__link">
            <span>Next case study</span>
            <h2 id="medisapience-next">CEM Digital</h2>
            <ArrowUpRightIcon />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
