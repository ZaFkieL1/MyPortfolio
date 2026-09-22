import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

/*
 * `next/font/google` is a build-time transform, so the loaders are not callable under
 * Vitest. Any test that reaches the root layout — the SEO suite reads its metadata —
 * only needs the class names the font would have produced.
 */
vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist", className: "font-geist", style: {} }),
}));

// jsdom has no matchMedia; GSAP's ScrollTrigger reads it when the plugin registers.
if (typeof window !== "undefined" && typeof window.matchMedia !== "function") {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

afterEach(() => {
  cleanup();
});
