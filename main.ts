// The Houseplant Out-of-Office — make.fun entry
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. The line is 81 characters, inside the 1-120 gate.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office, photosynthesizing — water me Tuesday or start planning my funeral.";

// Runtime guard: the sealed scorer requires UTF-8 text of 1-120 characters,
// not only whitespace. Fail loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`Entry is ${LINE.length} characters; gate is 1-120.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (LINE.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

// Read back and confirm the file holds exactly the line, byte for byte.
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (written !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt does not match the entry.");
}
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
