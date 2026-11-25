import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of Monday, written as though Monday were a restaurant.
const REVIEW =
  "One star. Monday sat me beside my alarm clock, served a plate of unread emails, and billed me for the weekend I barely tasted.";

// The gate refuses anything over 25 words or 180 characters, so refuse to
// write an entry that breaks either cap instead of shipping a bad file.
const words = REVIEW.trim().split(/\s+/).length;
if (words > 25) {
  throw new Error(`Review is ${words} words, over the 25-word cap.`);
}
if ([...REVIEW].length > 180) {
  throw new Error(
    `Review is ${[...REVIEW].length} characters, over the 180-character cap.`,
  );
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
