import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const versionData = {
  version: Date.now().toString(),
  builtAt: new Date().toISOString(),
};

fs.writeFileSync(
  path.join(publicDir, "version.json"),
  JSON.stringify(versionData, null, 2),
  "utf8"
);

console.log(`[Version Generator] Generated public/version.json with version ${versionData.version}`);

