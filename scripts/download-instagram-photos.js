// @ts-check
// Run: node scripts/download-instagram-photos.js
// Requires: Chrome fully closed (script uses your Chrome profile to inherit Instagram login)

const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

const os = require("os");

const CHROME_EXE =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
// Dedicated temp profile so this never conflicts with your running Chrome.
// On re-runs the session is preserved (you stay logged in).
const SCRIPT_PROFILE = path.join(os.tmpdir(), "fanclare-instagram-dl");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const posts = [
  { url: "https://www.instagram.com/p/DWjQ0sKjacL/", filename: "cattle-herd.jpg" },
  { url: "https://www.instagram.com/p/DYISYCVERvI/", filename: "hay-field.jpg" },
  { url: "https://www.instagram.com/p/DYDkHERkZyB/", filename: "black-angus.jpg" },
  { url: "https://www.instagram.com/p/DYA-Ae3kRWw/", filename: "cooked-steak.jpg" },
  { url: "https://www.instagram.com/p/DXtuw9ykQIr/", filename: "pork-cuts.jpg" },
  { url: "https://www.instagram.com/p/DVPPGmNEUlm/", filename: "beef-bus.jpg" },
  { url: "https://www.instagram.com/p/DU-8TFMkeuQ/", filename: "farm-pond.jpg" },
];

// Navigates to a post and returns the largest CDN image URL seen during load.
// Strategy:
//  1. Intercept all CDN image responses (track url → content-length) before navigation
//  2. After page load, scroll to trigger lazy-loaded images
//  3. Pick the CDN image with the largest content-length
//  4. Fall back to JSON-LD / script data extraction
//  5. Final fallback: og:image meta tag (often 640 px thumbnail)
async function getMainImageSrc(tab, url) {
  const cdnImages = new Map(); // url -> content-length (0 if unknown)

  const onResponse = (response) => {
    const resUrl = response.url();
    if (
      (resUrl.includes("cdninstagram.com") || resUrl.includes("fbcdn.net")) &&
      /\.(jpg|jpeg|webp|png)/i.test(resUrl)
    ) {
      const len = parseInt(response.headers()["content-length"] || "0", 10);
      cdnImages.set(resUrl, len);
    }
  };

  tab.on("response", onResponse);

  await tab.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
  await tab.keyboard.press("Escape");

  // Scroll twice to trigger lazy loading in the article area
  await tab.evaluate(() => window.scrollBy(0, 600));
  await new Promise((r) => setTimeout(r, 2000));
  await tab.evaluate(() => window.scrollBy(0, 300));
  await new Promise((r) => setTimeout(r, 1500));

  tab.off("response", onResponse);

  // Pick the largest CDN image seen — only trust it if >= 50 KB
  if (cdnImages.size > 0) {
    const bySize = [...cdnImages.entries()].sort((a, b) => b[1] - a[1]);
    const best = bySize[0];
    if (best && (best[1] === 0 || best[1] >= 50_000)) return best[0];
    // Falls through to script/og:image if best candidate is a tiny thumbnail
  }

  // Fallback: look for display_url embedded in page scripts
  const scriptSrc = await tab.evaluate(() => {
    for (const script of document.querySelectorAll("script")) {
      const m = script.textContent.match(/"display_url":"([^"]+)"/);
      if (m) return m[1].replace(/\\u0026/g, "&");
    }
    return null;
  });
  if (scriptSrc) return scriptSrc;

  // Final fallback: og:image (may be low-res thumbnail)
  const ogSrc = await tab
    .$eval('meta[property="og:image"]', (el) => el.getAttribute("content"))
    .catch(() => null);

  return ogSrc;
}

// Returns true if the first bytes indicate WebP format
function isWebP(buf) {
  return (
    buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 &&
    buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50
  );
}

// Fetches the image bytes from within the page context (inherits browser auth/cookies).
// Returns { outputPath } — may differ from requested path if format is WebP.
async function downloadImage(tab, src, outputPath) {
  const bytes = await tab.evaluate(async (url) => {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Fetch failed: HTTP ${resp.status}`);
    const ab = await resp.arrayBuffer();
    return Array.from(new Uint8Array(ab));
  }, src);

  const buf = Buffer.from(bytes);

  // Fix extension if Chrome delivered WebP instead of JPEG
  if (isWebP(buf) && outputPath.endsWith(".jpg")) {
    outputPath = outputPath.replace(/\.jpg$/, ".webp");
  }

  fs.writeFileSync(outputPath, buf);
  return outputPath;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("Launching Chrome (dedicated script profile — your Chrome can stay open)...");
  console.log(`Profile dir: ${SCRIPT_PROFILE}\n`);

  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: CHROME_EXE,
      userDataDir: SCRIPT_PROFILE,
      headless: false,
      defaultViewport: { width: 1280, height: 900 },
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-blink-features=AutomationControlled",
      ],
    });
  } catch (err) {
    console.error("\n✗ Could not launch Chrome.\n  Error: " + err.message);
    process.exit(1);
  }

  const [page] = await browser.pages();

  // Remove the webdriver flag Instagram uses to detect automation
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "webdriver", { get: () => undefined });
  });

  // Verify Instagram session
  console.log("Checking Instagram login...");
  await page.goto("https://www.instagram.com/", {
    waitUntil: "networkidle2",
    timeout: 30000,
  });

  const needsLogin = await page.evaluate(() =>
    !!document.querySelector('a[href="/accounts/login/"]')
  );

  if (needsLogin) {
    console.log(
      "\nNot logged in to Instagram.\n" +
        "  → Log in using the Chrome window that just opened.\n" +
        "  → Press Enter here when you're on the Instagram home feed.\n"
    );
    process.stdin.resume();
    await new Promise((resolve) => process.stdin.once("data", resolve));
    process.stdin.pause();
  } else {
    console.log("Already logged in.\n");
  }

  const failed = [];

  for (const post of posts) {
    process.stdout.write(`Downloading ${post.filename} ...`);

    // Open a fresh page for each post to avoid detached-frame issues
    const tab = await browser.newPage();
    await tab.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, "webdriver", { get: () => undefined });
    });

    try {
      // getMainImageSrc handles navigation + scrolling + CDN interception
      const src = await getMainImageSrc(tab, post.url);
      if (!src) throw new Error("Could not find any image URL");

      const requestedPath = path.join(OUTPUT_DIR, post.filename);
      const savedPath = await downloadImage(tab, src, requestedPath);

      const kb = Math.round(fs.statSync(savedPath).size / 1024);
      const savedName = path.basename(savedPath);
      const note = savedName !== post.filename ? ` → saved as ${savedName}` : "";
      console.log(` ✓  ${kb} KB${note}`);
    } catch (err) {
      console.log(` ✗  ${err.message}`);
      // Save a debug screenshot so we can see what the page looked like
      try {
        await tab.screenshot({
          path: path.join(OUTPUT_DIR, `DEBUG-${post.filename.replace(".jpg", ".png")}`),
          fullPage: false,
        });
        console.log(`     (debug screenshot saved)`);
      } catch (_) {}
      failed.push(post.filename);
    } finally {
      await tab.close();
    }

    // Polite delay between requests
    await new Promise((r) => setTimeout(r, 2000));
  }

  // Copy cattle-herd.jpg → og-default.jpg
  const herd = path.join(OUTPUT_DIR, "cattle-herd.jpg");
  const og = path.join(OUTPUT_DIR, "og-default.jpg");
  if (fs.existsSync(herd)) {
    fs.copyFileSync(herd, og);
    console.log("\nCopied cattle-herd.jpg → og-default.jpg");
  } else {
    console.log("\n⚠  cattle-herd.jpg was not downloaded — og-default.jpg not created.");
  }

  await browser.close();

  if (failed.length) {
    console.log(`\nFailed (${failed.length}): ${failed.join(", ")}`);
    console.log("Re-run the script to retry failed images.");
  } else {
    console.log("\nAll images downloaded successfully.");
  }
}

main().catch((err) => {
  console.error("\nFatal error:", err.message);
  process.exit(1);
});
