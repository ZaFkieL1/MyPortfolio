"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Site-wide scroll motion, built on GSAP ScrollTrigger + SplitText. Works in every browser,
 * including Firefox. Pages stay server-rendered; this component renders nothing and only
 * enhances markup that opts in with data attributes:
 *
 *   data-reveal            block rises and fades in
 *   data-reveal="settle"   large media: rises and settles from a slight scale
 *   data-reveal-group      children enter one after another
 *   data-split             heading reveals line by line from behind a mask
 *   data-countup           numeric text counts up from zero ("20,641+", "41%")
 *   data-parallax="0.15"   element drifts against the scroll (scrubbed)
 *
 * Only elements that start below the fold are hidden (opacity only, so screen readers and
 * in-page search still reach them), and nothing on screen flashes at load.
 * Everything runs inside gsap.matchMedia: with prefers-reduced-motion the page is untouched.
 */

const RISE = "[data-reveal]:not([data-reveal='settle'])";
const SETTLE = "[data-reveal='settle']";
const EASE = "expo.out";

function belowFold(element: Element) {
  return element.getBoundingClientRect().top > window.innerHeight * 0.9;
}

function outsideGroups(element: Element) {
  return !element.parentElement?.closest("[data-reveal-group]");
}

/** Shared with the home hero, whose figures count up on load instead of on scroll. */
export function parseCount(text: string) {
  const match = text.trim().match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const value = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(value)) return null;
  return { prefix, value, suffix, grouped: digits.includes(","), decimals: digits.split(".")[1]?.length ?? 0 };
}

export function ScrollReveal() {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (typeof window.matchMedia !== "function") return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const start = "top 88%";
        const counters: Array<{ element: HTMLElement; original: string }> = [];

        // Single blocks.
        const blocks = gsap.utils.toArray<HTMLElement>(RISE).filter(outsideGroups).filter(belowFold);
        gsap.set(blocks, { opacity: 0, y: 48 });
        ScrollTrigger.batch(blocks, {
          start,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.08, overwrite: true }),
        });

        // Large media.
        const media = gsap.utils.toArray<HTMLElement>(SETTLE).filter(outsideGroups).filter(belowFold);
        gsap.set(media, { opacity: 0, y: 64, scale: 0.94 });
        ScrollTrigger.batch(media, {
          start: "top 92%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: EASE, overwrite: true }),
        });

        // Groups: children stagger in.
        for (const group of gsap.utils.toArray<HTMLElement>("[data-reveal-group]").filter(belowFold)) {
          const children = Array.from(group.children);
          gsap.set(children, { opacity: 0, y: 56 });
          ScrollTrigger.create({
            trigger: group,
            start,
            once: true,
            onEnter: () =>
              gsap.to(children, { opacity: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.1, overwrite: true }),
          });
        }

        // Headings: lines slide up from behind a mask.
        for (const heading of gsap.utils.toArray<HTMLElement>("[data-split]").filter(belowFold)) {
          SplitText.create(heading, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (split) =>
              gsap.from(split.lines, {
                yPercent: 110,
                duration: 1.2,
                ease: EASE,
                stagger: 0.09,
                scrollTrigger: { trigger: heading, start, once: true },
              }),
          });
        }

        // Numbers count up.
        for (const element of gsap.utils.toArray<HTMLElement>("[data-countup]")) {
          // Keep the server-rendered value: effects can run twice (React dev), and the first
          // run already reset the text to zero.
          const original = (element.dataset.countupValue ??= element.textContent ?? "");
          const parsed = parseCount(original);
          if (!parsed) continue;
          counters.push({ element, original });
          const counter = { value: 0 };
          const format = () => {
            const rounded = counter.value.toFixed(parsed.decimals);
            const number = parsed.grouped ? Number(rounded).toLocaleString("en-US") : rounded;
            element.textContent = `${parsed.prefix}${number}${parsed.suffix}`;
          };
          format();
          gsap.to(counter, {
            value: parsed.value,
            duration: 2,
            ease: "power3.out",
            onUpdate: format,
            scrollTrigger: { trigger: element, start, once: true },
          });
        }

        // Parallax drift.
        for (const element of gsap.utils.toArray<HTMLElement>("[data-parallax]")) {
          const speed = Number(element.dataset.parallax) || 0.12;
          gsap.fromTo(
            element,
            { yPercent: speed * 60 },
            {
              yPercent: -speed * 60,
              ease: "none",
              scrollTrigger: { trigger: element.parentElement ?? element, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        }

        // Reverting (route change, reduced motion switched on) restores the real numbers.
        return () => counters.forEach(({ element, original }) => { element.textContent = original; });
      });

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
