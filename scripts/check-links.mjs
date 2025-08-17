#!/usr/bin/env node
import {promises as fs} from 'node:fs';
import path from 'node:path';

// 简单校验：扫描 docs/anvil 内的 markdown，提取形如
//   ref/foundry-.../crates/anvil/...
// 的相对链接，验证文件是否存在，避免引用失效。

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs', 'anvil');
const REF_DIR = path.join(ROOT, 'ref');

/** @type {string[]} */
const failures = [];

async function walk(dir) {
  const entries = await fs.readdir(dir, {withFileTypes: true});
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (e.isFile() && /\.(md|mdx)$/.test(e.name)) await checkFile(p);
  }
}

async function checkFile(file) {
  const text = await fs.readFile(file, 'utf8');
  const re = /(ref\/[\w.-]+\/crates\/anvil\/[\w\/-]+\.[a-zA-Z0-9]+)/g;
  let m;
  while ((m = re.exec(text))) {
    const rel = m[1];
    const abs = path.join(ROOT, rel);
    try {
      await fs.access(abs);
    } catch {
      failures.push(`${file}: missing -> ${rel}`);
    }
  }
}

(async () => {
  try {
    await walk(DOCS_DIR);
    if (failures.length) {
      console.error(`Broken refs (count=${failures.length}):`);
      for (const f of failures) console.error(' -', f);
      process.exitCode = 1;
    } else {
      console.log('All source refs OK');
    }
  } catch (err) {
    console.error('check-links failed:', err);
    process.exitCode = 2;
  }
})();
