// Runs once before the suite: enforce test-project credentials, migrate the
// test database, wipe it clean, seed the baseline org, and mint the staff
// session used by back-office tests. Booting the app is Playwright's job
// (webServer); this owns the data.

import { assertTestEnv } from './loadEnv.js';
import { migrate, truncateAll, seedBaseline, closeDb } from './helpers/db.js';
import { mintStaffState } from './helpers/session.js';

export default async function globalSetup() {
  assertTestEnv();

  console.log('[e2e] migrating test database…');
  await migrate();

  console.log('[e2e] truncating + seeding baseline…');
  await truncateAll();
  await seedBaseline();

  console.log('[e2e] minting staff session…');
  await mintStaffState();

  await closeDb();
  console.log('[e2e] setup complete.');
}
