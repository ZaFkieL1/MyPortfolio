import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { FooterFlow } from "@/components/layout/footer-flow";
import { ButtonLink } from "@/components/ui/button-link";
import { localePath, type Locale } from "@/content/i18n";
import { getPortfolioContent } from "@/content/portfolio";
import { getUi } from "@/content/ui";
import styles from "./footer.module.css";

/**
 * Site footer with the closing call to action, on every page. A quiet echo of the home hero:
 * the same light canvas and dashed guides, one line of steps instead of a diagram.
 */
export function Footer({ locale }: { locale: Locale }) {
  const { person, contact } = getPortfolioContent(locale);
  const ui = getUi(locale);

  return (
    <footer id="contact" className={`site-footer ${styles.footer}`} aria-labelledby="contact-title">
      <div className={styles.guides} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.cta}>
          <div className={styles.lead} data-reveal>
            <p className={styles.status}><i aria-hidden="true" />{person.availability}</p>
            <h2 id="contact-title">
              {contact.title} <span>{contact.titleMuted}</span>
            </h2>
          </div>
          <div className={styles.aside} data-reveal>
            <p>{contact.body}</p>
            <div className={styles.actions}>
              <ButtonLink href={`mailto:${person.email}`} variant="primary">
                {contact.action} <ArrowUpRightIcon />
              </ButtonLink>
              <Link className={styles.ghost} href={localePath(locale, "/#work")}>
                {ui.footer.viewWork} <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>

        <FooterFlow steps={contact.steps} label={ui.footer.stepsLabel} />

        <div className={styles.base}>
          <div className={styles.bar}>
            <p className={styles.identity}>
              <span className={styles.mark} aria-hidden="true">{person.mark}</span>
              <span>
                <strong>{person.name}</strong> © {new Date().getFullYear()}
              </span>
            </p>
            <p>{person.location} · {ui.footer.availableWorldwide}</p>
            <ul className={styles.links}>
              {person.linkedin && (
                <li>
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer me">LinkedIn</a>
                </li>
              )}
              {person.github && (
                <li>
                  <a href={person.github} target="_blank" rel="noopener noreferrer me">GitHub</a>
                </li>
              )}
              <li><Link href={`mailto:${person.email}`}>{person.email}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
