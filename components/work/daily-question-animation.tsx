import styles from "./daily-question-animation.module.css";

const steps = [
  { title: "Announcements carry the class link", body: "The live class is one tap from the feed." },
  { title: "The question of the day goes out", body: "Students vote inside the app, not in a chat." },
  { title: "The answer unlocks on schedule", body: "At the time the teacher picked, with a push." },
];

const options = ["Epinephrine, intramuscular", "Diphenhydramine, intravenous", "Hydrocortisone, intravenous"];

/**
 * A simplified, looping recreation of CEM Digital, the mobile-first PWA: the announcements
 * feed, then the question of the day from vote to scheduled reveal.
 * Pure CSS keyframes on one shared 14s timeline: no client JS, and the reduced-motion
 * fallback shows the finished state (answer released and correct).
 */
export function DailyQuestionAnimation({ caption }: { caption: string }) {
  return (
    <figure className={styles.figure}>
      <div
        className={styles.stage}
        role="img"
        aria-label="Animated, simplified recreation of the CEM Digital mobile app: an announcement with a Join class button, then the student opens Questions, votes on the question of the day, and at 6:00 PM a notification releases the correct answer."
      >
        <ol className={styles.steps} aria-hidden="true">
          {steps.map((step, index) => (
            <li key={step.title} className={styles[`step${index + 1}`]}>
              <i>{index + 1}</i>
              <div>
                <strong>{step.title}</strong>
                <span>{step.body}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.phone} aria-hidden="true">
          <div className={styles.screen}>
            <div className={styles.statusBar}>
              <span className={styles.clock}>
                <b className={styles.timeMorning}>11:46</b>
                <b className={styles.timeEvening}>6:00</b>
              </span>
              <span className={styles.notch} />
              <span className={styles.signal}><i /><i /><i /></span>
            </div>

            <div className={styles.header}>
              <span className={styles.welcome}>Welcome, María</span>
              <strong className={styles.title}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
                  <path d="M4 10.5 12 4l8 6.5V20H4z" />
                  <path d="M10 20v-5h4v5" />
                </svg>
                Home
              </strong>
              <span className={styles.logo}>CEM</span>
            </div>

            <div className={`${styles.tab} ${styles.tabAnnouncements}`}>Announcements</div>
            <div className={`${styles.tab} ${styles.tabQuestions}`}>Questions</div>
            <div className={styles.filter}>Filter</div>

            {/* Scene A: the announcements feed */}
            <div className={styles.feedAnnouncements}>
              <div className={`${styles.card} ${styles.classCard}`}>
                <div className={styles.meta}><span className={styles.pill}>Cardiology</span>Today</div>
                <strong className={styles.cardTitle}>Live class: heart failure</strong>
                <p className={styles.cardBody}>Tonight at 7:00 PM. Bring the case from Tuesday.</p>
                <span className={styles.join}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
                    <rect x="3" y="6.5" width="12.5" height="11" rx="2" />
                    <path d="m15.5 11 5-3v8l-5-3z" />
                  </svg>
                  Join class
                </span>
              </div>
              <div className={`${styles.card} ${styles.fileCard}`}>
                <div className={styles.meta}><span className={styles.pill}>Cardiology</span>Yesterday</div>
                <strong className={styles.cardTitle}>Recording: ECG workshop</strong>
                <span className={styles.attachment}>
                  <b>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z" /></svg>
                  </b>
                  <span>ecg-workshop.mp4<small>Preview</small></span>
                </span>
              </div>
            </div>

            {/* Scene B: the question of the day */}
            <div className={styles.feedQuestions}>
              <div className={styles.questionCard} />
              <div className={`${styles.meta} ${styles.questionMeta}`}><span className={styles.pill}>Emergency medicine</span>Today</div>
              <span className={styles.voted}>✓ Voted</span>
              <strong className={styles.questionTitle}>Question of the day</strong>
              <p className={styles.questionText}>First-line treatment for anaphylaxis with hypotension?</p>
              <div className={styles.poll}>Poll</div>
              {options.map((option, index) => (
                <div key={option} className={`${styles.option} ${styles[`option${index + 1}`]}`}>
                  <span className={styles.radio} />
                  {option}
                </div>
              ))}
              <span className={styles.selection}>Single choice</span>
              <span className={styles.vote}>Vote</span>
              <div className={styles.pending}>Your result unlocks in 6h 14m</div>
              <div className={styles.released}>Correct answer: epinephrine, intramuscular</div>
            </div>

            <div className={styles.push}>
              <span className={styles.pushIcon}>CEM</span>
              <span>
                <b>Results available: Question of the day</b>
                You can now see if your answer was correct.
              </span>
            </div>

            <nav className={styles.nav}>
              <span className={styles.navBubble} />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                <path d="M4 10.5 12 4l8 6.5V20H4z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="5" y="4.5" width="14" height="16" rx="2" />
                <path d="M9 10h6M9 14h6" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                <path d="M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l2 2.5h8a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="7" width="18" height="11" rx="4" />
                <path d="M7.5 12.5h3M9 11v3M15 12h.01M17 14h.01" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3.5v2.5M12 18v2.5M3.5 12H6M18 12h2.5M6 6l1.8 1.8M16.2 16.2 18 18M6 18l1.8-1.8M16.2 7.8 18 6" />
              </svg>
            </nav>

            <div className={styles.touch}>
              <span />
            </div>
          </div>
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
