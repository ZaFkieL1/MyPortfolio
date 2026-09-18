"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "./footer.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Step = { title: string; detail: string };

/**
 * The footer's three working steps on one dashed line. A single pulse travels along it on a
 * slow loop, the one quiet echo of the home hero's diagram. Reduced motion: no pulse.
 */
export function FooterFlow({ steps }: { steps: readonly Step[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window.matchMedia !== "function") return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            repeat: -1,
            repeatDelay: 1.2,
            scrollTrigger: { trigger: root.current, start: "top 90%", toggleActions: "play pause resume pause" },
          })
          .fromTo("[data-footer-pulse]", { left: "0%" }, { left: "100%", duration: 3.2, ease: "power1.inOut" }, 0)
          .fromTo("[data-footer-pulse]", { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0)
          .to("[data-footer-pulse]", { opacity: 0, duration: 0.4 }, 2.8);
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className={styles.flow}>
      <span className={styles.flowLine} aria-hidden="true">
        <i data-footer-pulse />
      </span>
      <ol aria-label="How a project starts">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className={styles.flowIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <strong>{step.title}</strong>
            <span>{step.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
