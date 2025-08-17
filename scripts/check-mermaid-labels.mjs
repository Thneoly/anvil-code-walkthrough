#!/usr/bin/env node
/**
 * Scan docs for Mermaid code blocks and warn when a node/participant label contains
 * special chars ((),/:,) without quotes. This is a heuristic to prevent Mermaid parse errors.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(root, 'docs');

/**
 * Return list of files under dir recursively.
 */
function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

function isDoc(p) {
  return p.includes(`${path.sep}docs${path.sep}`) && /\.(md|mdx)$/.test(p);
}

// Match [Label] with special chars, but skip ["..."] and subroutine shapes [(...)]
const specialRe = /\[(?!\()[^\]"']*[()/:,][^\]]*\]|participant\s+\w+\s+as\s+([^"'\n]+[()/:,][^\n]*)/i;

let count = 0;
for (const file of walk(DOCS_DIR)) {
  if (!isDoc(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  // Find mermaid code blocks
  const blocks = [...text.matchAll(/```mermaid([\s\S]*?)```/g)];
  if (!blocks.length) continue;
  blocks.forEach((m, idx) => {
    const body = m[1];
    const lines = body.split(/\r?\n/);
    lines.forEach((line, i) => {
  if (specialRe.test(line) && !/\["|\s+as\s+"/.test(line)) {
        count++;
        const loc = `${file}:${i + 1}`;
        console.log(`[WARN] Mermaid label may need quotes: ${loc}\n  ${line.trim()}`);
      }
    });
  });
}

if (count > 0) {
  console.error(`\nFound ${count} potential Mermaid label(s) needing quotes.`);
  process.exitCode = 1; // non-zero to make it visible in CI if used
} else {
  console.log('Mermaid labels look OK.');
}
