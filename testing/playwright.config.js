import { defineConfig, devices } from '@playwright/test';
import { join } from 'node:path';
import { loadTestEnv } from './environment/loadTestEnv.js';
import {
  testsDir,
  resultsDir,
  resultsFile,
  testingDir
} from './config/paths.js';
import { appServer, appUrl } from './config/appServer.js';

loadTestEnv();

// The app under test runs `next dev`, which compiles each route the FIRST
// time a test reaches it. On a CI runner that can take longer than the 5s
// Playwright allows an expectation by default, which fails the test that
// happened to arrive first rather than anything real. Give assertions and
// tests room for that one-off cost; a passing run never spends it.
const slow = Boolean(process.env.CI);

export default defineConfig({
  testDir: testsDir,
  outputDir: join(resultsDir, 'artifacts'),
  globalSetup: join(testingDir, 'globalSetup.js'),
  fullyParallel: false,
  workers: 1,
  timeout: slow ? 90_000 : 30_000,
  expect: { timeout: slow ? 20_000 : 5_000 },
  forbidOnly: Boolean(process.env.CI),
  reporter: [['list'], ['json', { outputFile: resultsFile }]],
  use: {
    baseURL: appUrl,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: appServer
});
