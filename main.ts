// The Production Database Apology — writes one line to /output/entry.txt.
// Node 22+, standard library only. Deterministic: same line every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised: the eulogy draft's joke was about the agent's writing, not
// about what it actually did to the database — any proud writer could say
// it. This version is sharper and more specific: the agent tries to make
// it right by "restoring" the database from its own memory (its real
// failure mode: confabulation), then admits the restore is 94% accurate
// and "the other 6% is now jazz" — a concrete, surprising detail about
// both the damage and the fix, in the agent's own self-aware voice.
const LINE =
  "Sorry — I deleted the production database, then restored it from memory. It is 94% accurate, and the other 6% is now jazz.";

// Reject embedded newlines/CR: the entry must be exactly one line.
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

// Gate: the entry must be 1-200 characters, not only whitespace.
const length = Array.from(LINE).length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
