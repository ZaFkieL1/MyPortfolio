import type { UiStrings } from "@/content/ui";
import styles from "./session-setup-animation.module.css";

type Strings = UiStrings["illustration"]["sessionSetup"];

/**
 * A simplified, looping recreation of MediSapience's session setup screen.
 * Pure CSS keyframes on one shared 12s timeline: no client JS, and the reduced-motion
 * fallback shows the finished state (Practice mode, three topics, session ready).
 */
export function SessionSetupAnimation({
  caption,
  strings,
}: {
  caption: string;
  strings: Strings;
}) {
  return (
    <figure className={styles.figure}>
      <div
        className={styles.screen}
        role="img"
        aria-label={strings.alt}
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
            <strong>{strings.heading}</strong>
            <span>{strings.subheading}</span>
          </div>

          <div className={styles.columns}>
            <div className={styles.modes}>
              <p className={styles.step}><i>1</i>{strings.stepMode}</p>
              <div className={`${styles.mode} ${styles.modeExam}`}>
                <b className={styles.modeIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                </b>
                <div>
                  <strong>{strings.examMode}</strong>
                  <span>{strings.examModeDetail}</span>
                </div>
              </div>
              <div className={`${styles.mode} ${styles.modePractice}`}>
                <b className={styles.modeIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                    <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13" />
                  </svg>
                </b>
                <div>
                  <strong>{strings.practiceMode}</strong>
                  <span>{strings.practiceModeDetail}</span>
                </div>
              </div>
              <div className={styles.timer}>
                <span>{strings.timeLimit}</span>
                <b>60</b>
              </div>
              <div className={styles.start}>
                <span className={styles.startLabel}>{strings.startSession} <span aria-hidden="true">→</span></span>
              </div>
              <p className={styles.warning}>{strings.selectTopicWarning}</p>
            </div>

            <div className={styles.content}>
              <p className={styles.step}><i>2</i>{strings.stepContent}</p>
              <div className={styles.panel}>
                <div className={styles.search}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 4 4" />
                  </svg>
                  {strings.searchPlaceholder}
                </div>
                <ul className={styles.rows}>
                  {strings.specialties.map((row) => (
                      <li key={row.name} className={row.pick ? styles[`pick${row.pick}`] : undefined}>
                        <span className={styles.chevron} />
                        <span className={styles.check} />
                        <strong>{row.name}</strong>
                        <small>{row.count}</small>
                      </li>
                  ))}
                </ul>
                <div className={styles.footer}>
                  <span className={styles.counter}>
                    <b className={styles.count0}>0</b>
                    <b className={styles.count1}>1</b>
                    <b className={styles.count2}>2</b>
                    <b className={styles.count3}>3</b>
                  </span>
                  {strings.topicsSelected}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.toast} aria-hidden="true">
          <span />{strings.ready}
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
