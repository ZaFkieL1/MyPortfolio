// @vitest-environment node
import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

describe("launch readiness gate", () => {
  it("fails loudly while mock records and destinations remain", () => {
    let output = "";
    try {
      execFileSync(process.execPath, ["scripts/validate-launch.mjs"], {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch (error) {
      const failure = error as { stderr?: string; stdout?: string; status?: number };
      output = `${failure.stdout ?? ""}${failure.stderr ?? ""}`;
      expect(failure.status).toBe(1);
    }

    expect(output).toMatch(/Mock readiness/);
    expect(output).toMatch(/Illustrative media/);
    // The placeholder contact address is gone; nothing may reintroduce it.
    expect(output).not.toMatch(/Placeholder domain/);
    expect(output).not.toMatch(/Lorem ipsum/);
  });
});
