import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let gitCommit = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "";
if (!gitCommit) {
  try {
    gitCommit = execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    gitCommit = "";
  }
}

const timestamp = Date.now().toString();
const versionData = {
  version: gitCommit ? `${timestamp}-${gitCommit}` : timestamp,
  commit: gitCommit || "unknown",
  builtAt: new Date().toISOString(),
};

fs.writeFileSync(
  path.join(publicDir, "version.json"),
  JSON.stringify(versionData, null, 2),
  "utf8"
);

console.log(`[Version Generator] Generated public/version.json with version ${versionData.version}`);
