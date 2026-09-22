import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".agents/**",
    ".codex/**",
    // Nested checkouts and their build output are not this project's source:
    // a git worktree under .claude/ otherwise contributed tens of thousands of findings.
    "**/node_modules/**",
    ".claude/**",
  ]),
]);

export default eslintConfig;
