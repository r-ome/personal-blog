// Builds the resume PDF from Markdown.
//   md -> HTML (marked) -> styled HTML -> PDF (headless Chrome --print-to-pdf)
// Usage: node resume/build.mjs
import { existsSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { marked } from "marked";

const here = dirname(fileURLToPath(import.meta.url));
const mdPath = join(here, "Jerome-Agapay-Resume.md");
const cssPath = join(here, "style.css");
const htmlPath = join(here, ".resume.tmp.html");
const outPdf = join(here, "..", "public", "Jerome-Agapay-Resume.pdf");

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "google-chrome-stable",
  "google-chrome",
  "chromium",
  "chromium-browser",
].filter(Boolean);

const resolveChrome = () => {
  for (const candidate of chromeCandidates) {
    if (candidate.includes("/") && existsSync(candidate)) {
      return candidate;
    }

    try {
      execFileSync("which", [candidate], { stdio: "ignore" });
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }

  throw new Error(
    "Could not find Chrome/Chromium. Set CHROME_PATH to the browser executable and rerun npm run build:resume."
  );
};

const md = readFileSync(mdPath, "utf8");
const css = readFileSync(cssPath, "utf8");

marked.setOptions({ gfm: true, breaks: true });
const body = marked.parse(md);

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Jerome Agapay - Resume</title>
<style>${css}</style>
</head>
<body>
${body}
</body>
</html>`;

writeFileSync(htmlPath, html);

try {
  execFileSync(
    resolveChrome(),
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${outPdf}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "inherit" }
  );
} finally {
  rmSync(htmlPath, { force: true });
}

console.log(`Wrote ${outPdf}`);
