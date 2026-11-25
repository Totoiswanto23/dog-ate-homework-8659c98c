// dog-ate-homework-8659c98c: the entry is one line of plain text, the
// funniest excuse a dog can give after being caught eating the homework.
// This program writes that single line to /output/entry.txt, where the
// gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The excuse is pure dog logic: the worksheet told the dog to "chew over
// the problem", so the dog obeyed literally — twice — and would do it
// again before breakfast. No embarrassment, no apology, no stock line
// about the cat or the taste of paper: a dog who believes it did exactly
// what it was told, and is faintly proud of the thoroughness. The punch
// lands on the last clause, and the line needs no setup to make sense.
const LINE =
  "The worksheet said 'chew over the problem,' so I did — twice — and I'd do it again before breakfast.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
