import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    // Only this repo's suites: `node_modules/**` alone still swept nested installs
    // (e.g. a git worktree under `.claude/`), pulling in thousands of vendor tests.
    include: ["tests/**/*.test.{ts,tsx}"],
    exclude: ["tests/e2e/**", "**/node_modules/**"],
    setupFiles: ["./tests/setup.ts"],
  },
});
