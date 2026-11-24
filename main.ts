// This entry solves the promise "A git commit message before breaking production" by writing the answer to the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const answer = 'fix: remove safety checks that were slowing down the vibe';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
