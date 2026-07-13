import { readFileSync, existsSync } from 'node:fs';
import { resultsFile } from '../config/paths.js';

// No results yet is not an error: every story then reports as not-implemented,
// which is exactly the truth before the suite has run.
export function readResults() {
  if (!existsSync(resultsFile)) return null;

  try {
    return JSON.parse(readFileSync(resultsFile, 'utf8'));
  } catch (error) {
    console.warn(`Could not read ${resultsFile}: ${error.message}`);

    return null;
  }
}
