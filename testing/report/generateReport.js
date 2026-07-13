import { writeFileSync, mkdirSync } from 'node:fs';
import { resultsDir, reportFile } from '../config/paths.js';
import { readResults } from './readResults.js';
import { summarizeRun } from './summarizeRun.js';
import { renderPage } from './renderPage.js';
import { printSummary } from './printSummary.js';

function generateReport() {
  const results = readResults();
  const summary = summarizeRun(results);
  const runLabel = results ? new Date().toISOString() : 'no test run yet';

  mkdirSync(resultsDir, { recursive: true });
  writeFileSync(reportFile, renderPage(summary, runLabel));
  printSummary(summary);
}

generateReport();
