"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";
import { useRef, type ComponentType, type SVGProps } from "react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  BrowserIcon,
  DashboardIcon,
  DataIcon,
  IdeaIcon,
  PlugIcon,
  WorkflowIcon,
} from "@/components/icons";
import { parseCount } from "@/components/motion/scroll-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import type { portfolioContent } from "@/content/portfolio";
import styles from "./home-hero.module.css";

gsap.registerPlugin(MotionPathPlugin, SplitText, useGSAP);

type System = (typeof portfolioContent)["hero"]["system"];
type Node = System["inputs"][number] | System["outputs"][number];

const icons: Record<Node["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  idea: IdeaIcon,
  workflow: WorkflowIcon,
  data: DataIcon,
  browser: BrowserIcon,
  dashboard: DashboardIcon,
  plug: PlugIcon,
};

/*
 * Diagram geometry, in the SVG's 1200 × 360 viewBox. The HTML nodes are placed with the same
 * numbers as percentages, so wires and cards line up at every desktop width.
 */
const ROWS = [60, 180, 300];
const INPUT_EDGE = 240;
const OUTPUT_EDGE = 960;
const HUB_LEFT = 430;
const HUB_RIGHT = 770;
const HUB_Y = 180;

const inputWire = (y: number) => `M${INPUT_EDGE} ${y} C345 ${y} 345 ${HUB_Y} ${HUB_LEFT} ${HUB_Y}`;
const outputWire = (y: number) => `M${HUB_RIGHT} ${HUB_Y} C855 ${HUB_Y} 855 ${y} ${OUTPUT_EDGE} ${y}`;

type HomeHeroProps = {
  availability: string;
  statement: string;
  supporting: string;
  system: System;
  /** Published, approved figures shown along the bottom of the hero. */
  figures: { value: string; label: string }[];
  figuresSource: string;
};

function SystemNode({ node, side, index }: { node: Node; side: "input" | "output"; index: number }) {
  const Icon = icons[node.icon];
  return (
    <li className={styles.node} style={{ top: `${(ROWS[index] / 360) * 100}%` }} data-hero-node={side}>
      <span className={styles.nodeIcon}>
        <Icon />
      </span>
      <span className={styles.nodeText}>
        <strong>{node.title}</strong>
        <span>{node.detail}</span>
      </span>
    </li>
  );
}

/**
 * The home hero: a light, open stage. Statement and actions on top, then a system diagram —
 * what a client brings in, the engineering in the middle, what ships — drawn with line icons
 * and thin wires that carry small pulses through the hub. Real figures close the first screen.
 * Reduced motion shows the finished diagram with no pulses.
 */
export function HomeHero({ availability, statement, supporting, system, figures, figuresSource }: HomeHeroProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window.matchMedia !== "function") return;
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

          const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
          intro
            .from(split.lines, { yPercent: 110, duration: 1.3, stagger: 0.08 }, 0)
            .from("[data-hero-aside] > *", { opacity: 0, y: 20, duration: 1, stagger: 0.08 }, 0.25)
            .from("[data-hero-wires]", { opacity: 0, duration: 1.2, ease: "power2.out" }, 0.5)
            .from("[data-hero-hub]", { opacity: 0, scale: 0.94, duration: 1.2 }, 0.5)
            .from("[data-hero-node]", { opacity: 0, y: 14, duration: 1, stagger: 0.07 }, 0.65)
            .from("[data-hero-bottom] > *", { opacity: 0, y: 14, duration: 1, stagger: 0.08 }, 0.9);

          // Figures count up with the load sequence.
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
            intro.to(counter, { value: parsed.value, duration: 2, ease: "power3.out", onUpdate: format }, 1);
          }

          // The stages in the hub light up one after another, on a slow loop.
          const stages = gsap.utils.toArray<HTMLElement>("[data-hero-stage-step]");
          const cycle = gsap.timeline({ repeat: -1, delay: 1.6 });
          stages.forEach((stage) => {
            cycle
              .set(stages, { attr: { "data-active": "false" } })
              .set(stage, { attr: { "data-active": "true" } })
              .to({}, { duration: 1.1 });
          });

          // The hub ring breathes.
          gsap.to("[data-hero-ring]", {
            scale: 1.06,
            opacity: 0.5,
            duration: 2.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });

          if (!wide) {
            // Stacked diagram: a pulse runs down each connector.
            gsap.utils.toArray<HTMLElement>("[data-hero-drop]").forEach((dot, index) => {
              gsap
                .timeline({ repeat: -1, repeatDelay: 0.6, delay: 1.2 + index * 0.9 })
                .fromTo(dot, { top: "0%" }, { top: "100%", duration: 1.6, ease: "none" }, 0)
                .fromTo(dot, { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0)
                .to(dot, { opacity: 0, duration: 0.3 }, 1.3);
            });
            return;
          }

          // Pulses flow in along the input wires, through the hub, and out along the outputs.
          const flow = gsap.timeline({ repeat: -1, delay: 1.4, repeatDelay: 0.4 });
          const pulse = (dot: SVGCircleElement, path: SVGPathElement, at: number) => {
            flow
              .set(dot, { opacity: 0 }, at)
              .to(dot, { opacity: 1, duration: 0.25 }, at)
              .to(
                dot,
                { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 1.3, ease: "power1.inOut" },
                at,
              )
              .to(dot, { opacity: 0, duration: 0.25 }, at + 1.05);
          };
          const wires = gsap.utils.toArray<SVGPathElement>("[data-hero-wire]");
          const dots = gsap.utils.toArray<SVGCircleElement>("[data-hero-pulse]");
          wires.forEach((path, index) => {
            const isOutput = path.dataset.heroWire === "output";
            const row = index % ROWS.length;
            pulse(dots[index], path, (isOutput ? 1.5 : 0) + row * 0.14);
          });
          flow.fromTo(
            "[data-hero-ring]",
            { boxShadow: "0 0 0 0 rgb(10 10 10 / 0)" },
            { boxShadow: "0 0 0 10px rgb(10 10 10 / 0.04)", duration: 0.4, yoyo: true, repeat: 1 },
            1.3,
          );
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.guides} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={`hero__copy ${styles.top}`}>
          <h1 id="hero-title" className={styles.title} data-hero-title>{statement}</h1>
          <div className={styles.aside} data-hero-aside>
            <p className={styles.status}><i aria-hidden="true" />{availability}</p>
            <p className={styles.supporting}>{supporting}</p>
            <div className={styles.actions}>
              <ButtonLink href="#work" variant="primary">
                View my work <ArrowDownIcon />
              </ButtonLink>
              <a className={styles.ghost} href="#contact">
                Start a project <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.system}>
          <svg className={styles.wires} viewBox="0 0 1200 360" aria-hidden="true" data-hero-wires>
            {ROWS.map((y) => (
              <path key={`in-${y}`} d={inputWire(y)} data-hero-wire="input" />
            ))}
            {ROWS.map((y) => (
              <path key={`out-${y}`} d={outputWire(y)} data-hero-wire="output" />
            ))}
            {ROWS.map((y) => (
              <circle key={`in-end-${y}`} className={styles.joint} cx={INPUT_EDGE} cy={y} r="3" />
            ))}
            {ROWS.map((y) => (
              <circle key={`out-end-${y}`} className={styles.joint} cx={OUTPUT_EDGE} cy={y} r="3" />
            ))}
            {[...ROWS, ...ROWS].map((y, index) => (
              <circle
                key={`pulse-${index}`}
                className={styles.pulse}
                cx={index < ROWS.length ? INPUT_EDGE : HUB_RIGHT}
                cy={index < ROWS.length ? y : HUB_Y}
                r="4"
                data-hero-pulse
              />
            ))}
          </svg>

          <ul className={`${styles.nodes} ${styles.inputs}`} aria-label="What you bring">
            {system.inputs.map((node, index) => (
              <SystemNode key={node.title} node={node} side="input" index={index} />
            ))}
          </ul>

          <span className={styles.drop} aria-hidden="true"><i data-hero-drop /></span>

          <div className={styles.hub} data-hero-hub>
            <span className={styles.ring} aria-hidden="true" data-hero-ring />
            <span className={styles.hubMark} aria-hidden="true">HG</span>
            <p className={styles.hubTitle}>{system.hub.title}</p>
            <ol className={styles.stages}>
              {system.hub.stages.map((stage, index) => (
                <li key={stage} data-hero-stage-step data-active={index === 0 ? "true" : "false"}>
                  {stage}
                </li>
              ))}
            </ol>
          </div>

          <span className={styles.drop} aria-hidden="true"><i data-hero-drop /></span>

          <ul className={`${styles.nodes} ${styles.outputs}`} aria-label="What ships">
            {system.outputs.map((node, index) => (
              <SystemNode key={node.title} node={node} side="output" index={index} />
            ))}
          </ul>
        </div>

        <div className={styles.bottom} data-hero-bottom>
          <p className={styles.source}>{figuresSource}</p>
          <dl className={styles.figures}>
            {figures.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd data-hero-count>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
