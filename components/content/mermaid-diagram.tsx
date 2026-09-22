"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./mermaid-diagram.module.css";

type MermaidDiagramProps = {
  title: string;
  description: string;
  chart: string;
  steps: string[];
  tone?: "light" | "dark";
  /** Accessible name for the scrollable rendered figure, in the page's language. */
  diagramLabel?: string;
};

export function MermaidDiagram({
  title,
  description,
  chart,
  steps,
  tone = "light",
  diagramLabel,
}: MermaidDiagramProps) {
  const diagramId = useId().replaceAll(":", "");
  const diagramRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    let active = true;

    async function renderDiagram() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          fontFamily: "Geist, Arial, sans-serif",
          flowchart: { curve: "basis", htmlLabels: true },
          themeVariables: {
            background: tone === "dark" ? "#171717" : "#ffffff",
            primaryColor: tone === "dark" ? "#252522" : "#f3f3f0",
            primaryTextColor: tone === "dark" ? "#f3f3f0" : "#0a0a0a",
            primaryBorderColor: tone === "dark" ? "#676761" : "#8a8a84",
            lineColor: tone === "dark" ? "#c6f63d" : "#4f4f4b",
            secondaryColor: tone === "dark" ? "#c6f63d" : "#ecf9c9",
            tertiaryColor: tone === "dark" ? "#30302c" : "#eaeae5",
            edgeLabelBackground: tone === "dark" ? "#171717" : "#ffffff",
          },
        });

        const { svg, bindFunctions } = await mermaid.render(`diagram-${diagramId}`, chart);
        if (!active || !diagramRef.current) return;

        diagramRef.current.innerHTML = svg;
        bindFunctions?.(diagramRef.current);
        setRendered(true);
      } catch {
        // The semantic fallback remains available if Mermaid cannot render.
      }
    }

    void renderDiagram();
    return () => {
      active = false;
    };
  }, [chart, diagramId, tone]);

  return (
    <figure
      aria-label={title}
      className={`${styles.figure} ${tone === "dark" ? styles.dark : ""}`}
    >
      <div
        aria-label={diagramLabel ?? title}
        className={`${styles.scrollRegion} ${rendered ? styles.rendered : ""}`}
        role="region"
        tabIndex={0}
      >
        <div ref={diagramRef} className={styles.canvas} aria-hidden="true" />
      </div>
      <ol className={rendered ? styles.srOnly : styles.fallback}>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
      <figcaption>
        <strong>{title}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
}
