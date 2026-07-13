// Builds e2e/results/report.html from the latest Playwright JSON results and the
// story catalog. Runs without any database or a prior test run — when there are
// no results, every story simply shows as "not implemented", which is exactly
// how the report looks before the suite runs. Usage: node e2e/report/generate.js

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { summarize } from './status.js';
import { renderReport } from './render.js';

const here = dirname(fileURLToPath(import.meta.url));
const resultsDir = join(here, '..', 'results');
const resultsFile = join(resultsDir, 'results.json');
const outFile = join(resultsDir, 'report.html');

function readResults() {
  if (!existsSync(resultsFile)) return null;

  try {
    return JSON.parse(readFileSync(resultsFile, 'utf8'));
  } catch (error) {
    console.warn(`Could not parse ${resultsFile}: ${error.message}`);

    return null;
  }
}

function main() {
  const report = readResults();
  const summary = summarize(report);
  const runLabel = report ? new Date().toISOString() : 'no test run yet';
  const html = renderReport({ summary, generatedAt: runLabel, runLabel });

  mkdirSync(resultsDir, { recursive: true });
  writeFileSync(outFile, html);

  const { counts, behavioursPassed, behavioursTotal } = summary;

  console.log(`Report written to ${outFile}`);
  console.log(
    `  pass ${counts.pass} · partial ${counts.partial} · ` +
      `fail ${counts.fail} · not-implemented ${counts.notImplemented}`
  );
  console.log(`  behaviours verified ${behavioursPassed}/${behavioursTotal}`);
}

main();
