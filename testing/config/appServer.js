import { repoRoot } from './paths.js';

export const appPort = Number(process.env.E2E_PORT || 3100);
export const appUrl = `http://localhost:${appPort}`;

// Boots the real app with the test-project credentials already in process.env.
export const appServer = {
  command: `pnpm exec next dev --port ${appPort}`,
  cwd: repoRoot,
  url: appUrl,
  reuseExistingServer: !process.env.CI,
  timeout: 180_000,
  env: { ...process.env }
};
