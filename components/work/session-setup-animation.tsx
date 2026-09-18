import styles from "./session-setup-animation.module.css";

const specialties = [
  { name: "General Surgery", count: "1 subject" },
  { name: "Obstetrics & Gynecology", count: "6 subjects" },
  { name: "Community Medicine", count: "1 subject" },
  { name: "Internal Medicine", count: "5 subjects" },
  { name: "Pediatrics", count: "1 subject" },
];

// Rows the cursor checks, in order. Each index maps to a `.pick-N` keyframe timing in CSS.
const picks: Record<string, number> = {
  "Internal Medicine": 1,
  Pediatrics: 2,
  "General Surgery": 3,
};

/**
 * A simplified, looping recreation of MediSapience's session setup screen.
 * Pure CSS keyframes on one shared 12s timeline: no client JS, and the reduced-motion
 * fallback shows the finished state (Practice mode, three topics, session ready).
 */
export function SessionSetupAnimation({ caption }: { caption: string }) {
  return (
    <figure className={styles.figure}>
      <div
        className={styles.screen}
        role="img"
        aria-label="Animated, simplified recreation of the MediSapience session setup: the student picks Practice mode, selects three specialties and starts the session."
      >
        <div className={styles.sidebar} aria-hidden="true">
          <div className={styles.logo}><span />MediSapience</div>
          <div className={styles.user}>
            <span className={styles.avatar} />
            <span className={styles.userLines}><i /><i /></span>
          </div>
          <span className={`${styles.navItem} ${styles.navActive}`} />
          <span className={styles.navItem} />
          <span className={styles.navItem} />
          <span className={styles.navItem} />
          <span className={styles.navItem} />
        </div>

        <div className={styles.main} aria-hidden="true">
          <div className={styles.greeting}>
            <strong>Set up your session</strong>
            <span>Pick a mode and the topics to study.</span>
          </div>

          <div className={styles.columns}>
            <div className={styles.modes}>
              <p className={styles.step}><i>1</i>Choose a mode</p>
              <div className={`${styles.mode} ${styles.modeExam}`}>
                <b className={styles.modeIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                </b>
                <div>
                  <strong>Exam mode</strong>
                  <span>Timed. Results at the end.</span>
                </div>
              </div>
              <div className={`${styles.mode} ${styles.modePractice}`}>
                <b className={styles.modeIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                    <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13" />
                  </svg>
                </b>
                <div>
                  <strong>Practice mode</strong>
                  <span>No timer. Feedback as you go.</span>
                </div>
              </div>
              <div className={styles.timer}>
                <span>Time limit (min)</span>
                <b>60</b>
              </div>
              <div className={styles.start}>
                <span className={styles.startLabel}>Start session <span aria-hidden="true">→</span></span>
              </div>
              <p className={styles.warning}>Select at least one topic.</p>
            </div>

            <div className={styles.content}>
              <p className={styles.step}><i>2</i>Customize the content</p>
              <div className={styles.panel}>
                <div className={styles.search}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 4 4" />
                  </svg>
                  Search specialty, subject or topic…
                </div>
                <ul className={styles.rows}>
                  {specialties.map((row) => {
                    const pick = picks[row.name];
                    return (
                      <li key={row.name} className={pick ? styles[`pick${pick}`] : undefined}>
                        <span className={styles.chevron} />
                        <span className={styles.check} />
                        <strong>{row.name}</strong>
                        <small>{row.count}</small>
                      </li>
                    );
                  })}
                </ul>
                <div className={styles.footer}>
                  <span className={styles.counter}>
                    <b className={styles.count0}>0</b>
                    <b className={styles.count1}>1</b>
                    <b className={styles.count2}>2</b>
                    <b className={styles.count3}>3</b>
                  </span>
                  topics selected
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.toast} aria-hidden="true">
          <span />Practice session ready
        </div>

        <div className={styles.cursor} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 3l14 8-6.2 1.6L9.6 19z" fill="#fff" stroke="#0b1220" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
