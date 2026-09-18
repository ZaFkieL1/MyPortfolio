"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { parseCount } from "@/components/motion/scroll-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SessionSetupAnimation } from "@/components/work/session-setup-animation";
import practiceFeedback from "@/components/work/media/practice-feedback.webp";
import whatToStudyToday from "@/components/work/media/what-to-study-today.webp";
import styles from "./home.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type HomeHeroProps = {
  availability: string;
  statement: string;
  supporting: string;
  /** Published, approved figures shown in the notch cut into the stage's lower-left corner. */
  figures: { value: string; label: string }[];
  figuresSource: string;
};

/**
 * The home hero: a dark stage with the statement, a fan of real MediSapience screens, and a
 * canvas notch in the lower-left corner holding published figures. One GSAP load sequence
 * (lines rise from a mask, the cards deal in, the notch slides up), then the cards drift apart
 * and the statement lifts as the visitor scrolls away. Reduced motion shows the finished
 * composition with no movement.
 */
export function HomeHero({ availability, statement, supporting, figures, figuresSource }: HomeHeroProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window.matchMedia !== "function") return;

      // The navigation is dark while it sits over the stage and turns light once the stage
      // has scrolled away. Not motion, so it also runs with reduced motion.
      const nav = ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom top+=72",
        onToggle: (self) => {
          if (self.isActive) delete document.documentElement.dataset.navTheme;
          else document.documentElement.dataset.navTheme = "light";
        },
      });
      if (!nav.isActive && nav.progress > 0) document.documentElement.dataset.navTheme = "light";

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          wide: "(min-width: 64rem)",
        },
        (context) => {
          const { motion, wide } = context.conditions as { motion: boolean; wide: boolean };
          if (!motion) return;

          const split = SplitText.create("[data-hero-title]", { type: "lines", mask: "lines", autoSplit: true });
          const cards = gsap.utils.toArray<HTMLElement>("[data-hero-card]");

          const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
          intro
            .from("[data-hero-glow]", { opacity: 0, scale: 0.6, duration: 2.4, ease: "power2.out" }, 0)
            .from("[data-hero-status]", { opacity: 0, y: 16, duration: 0.9 }, 0.1)
            .from(split.lines, { yPercent: 115, duration: 1.3, stagger: 0.1 }, 0.15)
            .from("[data-hero-foot] > *", { opacity: 0, y: 28, duration: 1.1, stagger: 0.1 }, 0.6)
            .from("[data-hero-notch]", { yPercent: 100, duration: 1.2 }, 0.8)
            .from(
              cards,
              {
                opacity: 0,
                y: 160,
                rotation: 0,
                scale: 0.9,
                duration: 1.6,
                stagger: 0.12,
              },
              0.35,
            );

          // The figures sit at the bottom of the first screen, too low for a scroll trigger,
          // so they count up with the load sequence.
          for (const element of gsap.utils.toArray<HTMLElement>("[data-hero-count]")) {
            const original = (element.dataset.countupValue ??= element.textContent ?? "");
            const parsed = parseCount(original);
            if (!parsed) continue;
            const counter = { value: 0 };
            const format = () => {
              const rounded = counter.value.toFixed(parsed.decimals);
              const number = parsed.grouped ? Number(rounded).toLocaleString("en-US") : rounded;
              element.textContent = `${parsed.prefix}${number}${parsed.suffix}`;
            };
            format();
            intro.to(counter, { value: parsed.value, duration: 2, ease: "power3.out", onUpdate: format }, 0.9);
          }

          if (!wide) return;

          // Scroll away: cards fan further apart at different speeds, the statement lifts.
          const drift = gsap.timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
          });
          drift
            .to("[data-hero-card='back-left']", { yPercent: -18, xPercent: -8, rotation: -14 }, 0)
            .to("[data-hero-card='back-right']", { yPercent: -30, xPercent: 8, rotation: 12 }, 0)
            .to("[data-hero-card='front']", { yPercent: -10 }, 0)
            .to("[data-hero-title]", { yPercent: -12 }, 0);
        },
      );

      return () => {
        mm.revert();
        delete document.documentElement.dataset.navTheme;
      };
    },
    { scope: root },
  );

  return (
    <section ref={root} className={styles.hero} aria-labelledby="hero-title" data-hero-stage>
      <div className={styles.glow} data-hero-glow aria-hidden="true" />

      <div className={styles.heroInner}>
        <div className={`hero__copy ${styles.heroCopy}`}>
          <p className={styles.status} data-hero-status>
            <span className={styles.statusTag}><i aria-hidden="true" />{availability}</span>
            <Link href="/work/medisapience">
              See MediSapience <ArrowRightIcon />
            </Link>
          </p>
          <h1 id="hero-title" className={styles.heroTitle} data-hero-title>{statement}</h1>
          <div className={styles.heroFoot} data-hero-foot>
            <p>{supporting}</p>
            <div className={styles.heroActions}>
              <ButtonLink href="#work" variant="inverse">
                View my work <ArrowDownIcon />
              </ButtonLink>
              <a className={styles.heroGhost} href="#contact">
                Start a project <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.fan}>
          <figure className={`${styles.fanCard} ${styles.backLeft}`} data-hero-card="back-left">
            <Image
              src={practiceFeedback}
              width={1648}
              height={890}
              quality={90}
              sizes="34rem"
              alt="MediSapience Practice mode with instant feedback on a wrong answer."
            />
          </figure>
          <figure className={`${styles.fanCard} ${styles.backRight}`} data-hero-card="back-right">
            <Image
              src={whatToStudyToday}
              width={1904}
              height={890}
              quality={90}
              sizes="34rem"
              alt="MediSapience What to study today, ranking the topics to review."
            />
          </figure>
          <div className={`${styles.fanCard} ${styles.front}`} data-hero-card="front">
            <SessionSetupAnimation caption="Illustrative product UI — MediSapience session setup, recreated." />
          </div>
        </div>
      </div>

      <div className={styles.notch} data-hero-notch>
        <dl className={styles.figures}>
          {figures.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd data-hero-count>{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.figuresSource}>{figuresSource}</p>
      </div>
    </section>
  );
}
