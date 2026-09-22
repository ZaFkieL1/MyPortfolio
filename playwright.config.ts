import { defineConfig, devices } from "@playwright/test";

/*
 * `reuseExistingServer` will happily attach to whatever is already on the port, including
 * a dev server started from a different checkout — which then runs the suite against the
 * wrong code and fails in ways that look like real bugs. `PORT` lets a second checkout
 * (a worktree, a parallel agent) take a port of its own. The default is unchanged.
 */
const port = Number(process.env.PORT ?? 3000);
const origin = `http://localhost:${port}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  reporter: "line",
  use: {
    baseURL: origin,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: `npm exec --yes pnpm@10.28.2 -- exec next dev --port ${port}`,
    url: origin,
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chromium",
      use: { ...devices["Pixel 7"] },
    },
  ],
});
