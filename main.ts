import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of Monday, written as though Monday were a restaurant.
const REVIEW =
  "One star. Monday's host sat me beside my alarm clock, served cold coffee, then billed me for a weekend I'd barely tasted.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
