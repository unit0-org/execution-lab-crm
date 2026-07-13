// Playwright config for the "as the user" suite. Invoke from the repo root:
//   pnpm test:e2e   (which runs: playwright test -c e2e/playwright.config.js)
// The app is booted with .env.test credentials; tests never import app code.

import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadTestEnv } from './loadEnv.js';

loadTestEnv(); // best-effort; assertTestEnv() enforces creds in global-setup

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');
const port = Number(process.env.E2E_PORT || 3100);
const baseURL = `http://localhost:${port}`;

export default defineConfig({
  testDir: join(here, 'us'),
  outputDir: join(here, 'results', 'artifacts'),
  globalSetup: join(here, 'global-setup.js'),
  fullyParallel: false, // one shared test database — keep runs deterministic
  workers: 1,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  reporter: [
    ['list'],
    ['json', { outputFile: join(here, 'results', 'results.json') }]
  ],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ],
  webServer: {
    command: `pnpm exec next dev --port ${port}`,
    cwd: repoRoot,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: { ...process.env }
  }
});
