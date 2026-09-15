import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(path.join(process.cwd(), "app", "globals.css"), "utf8");

describe("design token contract", () => {
  it("keeps the approved color and motion values canonical", () => {
    expect(css).toContain("--color-accent: #c6f63d;");
    expect(css).toContain("--color-text-secondary: #4f4f4b;");
    expect(css).toContain("--duration-default: 320ms;");
    expect(css).toContain("--duration-slow: 600ms;");
    expect(css).toContain("--easing-exit: cubic-bezier(0.4, 0, 1, 1);");
  });

  it("defines semantic elevation, border, and z-index tokens", () => {
    expect(css).toContain("--border-default: 1px solid var(--color-border);");
    expect(css).toContain("--shadow-md:");
    expect(css).toContain("--z-sticky-nav: 40;");
    expect(css).toContain("--z-mobile-menu: 60;");
  });
});
