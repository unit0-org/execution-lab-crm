import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

export const testingDir = join(here, '..');
export const repoRoot = join(testingDir, '..');
export const testsDir = join(testingDir, 'tests');
export const resultsDir = join(testingDir, 'results');
export const resultsFile = join(resultsDir, 'results.json');
export const reportFile = join(resultsDir, 'report.html');
