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

export default defineConfig({
  testDir: testsDir,
  outputDir: join(resultsDir, 'artifacts'),
  globalSetup: join(testingDir, 'globalSetup.js'),
  fullyParallel: false,
  workers: 1,
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
