import { writeFileSync, mkdirSync } from 'node:fs';
import { resultsDir, reportFile } from '../config/paths.js';
import { readResults } from './readResults.js';
import { summarizeRun } from './summarizeRun.js';
import { renderPage } from './renderPage.js';
import { printSummary } from './printSummary.js';

function generateReport() {
  const summary = summarizeRun(readResults());

  mkdirSync(resultsDir, { recursive: true });
  writeFileSync(reportFile, renderPage(summary));
  printSummary(summary);
}

generateReport();
