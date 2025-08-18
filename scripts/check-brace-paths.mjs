#!/usr/bin/env node
// Simple prebuild check: forbid MDX-unfriendly brace-grouped file paths like `{a,b}.rs`
// Recursively scans docs/**/*.md{,x} and fails if patterns are found.

import fs from 'node:fs/promises';
import path from 'node:path';

const REGEX = /\{[^}]+\.(rs|md|toml|json|ya?ml)\}/g;
const root = process.cwd();
const docsDir = path.join(root, 'docs');

async function listFiles(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await listFiles(p)));
    } else if (e.isFile() && (p.endsWith('.md') || p.endsWith('.mdx'))) {
      out.push(p);
    }
  }
  return out;
}

const violations = [];
const files = await listFiles(docsDir).catch(() => []);
for (const f of files) {
  const text = await fs.readFile(f, 'utf8');
  const matches = text.match(REGEX);
  if (matches) {
    for (const m of matches) violations.push({ file: f, match: m });
  }
}

if (violations.length) {
  console.error('Brace-grouped file paths found (MDX-unsafe). Please expand explicitly:');
  for (const v of violations) {
    console.error(` - ${v.file}: ${v.match}`);
  }
  process.exit(1);
} else {
  console.log('No MDX-unsafe brace-grouped file paths found.');
}
