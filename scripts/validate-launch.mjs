import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const manifestUrl = new URL("../content/readiness.json", import.meta.url);
const manifest = JSON.parse(await readFile(manifestUrl, "utf8"));
const blockers = [];

if (manifest.status !== "verified" || manifest.indexable !== true) {
  blockers.push("Mock readiness: content/readiness.json is not verified and indexable.");
}

const checks = [
  ["Starter copy", /Create Next App|To get started, edit the/i],
  ["Lorem ipsum", /lorem ipsum/i],
  ["Unresolved marker", /\[CONTENT NEEDED\]/i],
  ["Placeholder domain", /example\.com/i],
  ["Unverified sample metric", /\b(?:300\+|19K\+|500\+)\b/i],
];

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(path));
    else if ([".ts", ".tsx", ".js", ".jsx", ".json"].includes(extname(path))) files.push(path);
  }
  return files;
}

for (const root of ["app", "components", "content"]) {
  const rootPath = fileURLToPath(new URL(`../${root}`, import.meta.url));
  for (const file of await sourceFiles(rootPath)) {
    const source = await readFile(file, "utf8");
    for (const [label, pattern] of checks) {
      if (pattern.test(source)) blockers.push(`${label}: ${file}`);
    }
  }
}

if (manifest.notes?.some((note) => /illustrat/i.test(note))) {
  blockers.push("Illustrative media remains in the content manifest.");
}

if (blockers.length > 0) {
  console.error("Launch blocked:");
  for (const blocker of [...new Set(blockers)]) console.error(`- ${blocker}`);
  process.exit(1);
}

console.log("Launch content is verified, source-clean, and indexable.");
