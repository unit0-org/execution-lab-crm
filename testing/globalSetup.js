import { assertTestEnv } from './environment/assertTestEnv.js';
import { migrateTestDatabase } from './database/migrateTestDatabase.js';
import { truncateAllTables } from './database/truncateAllTables.js';
import { seedOrganization } from './database/seedOrganization.js';
import { closeDatabase } from './database/connect.js';
import { mintStaffSession } from './session/mintStaffSession.js';

// Runs once before the suite: migrate the test database, wipe it, seed the
// baseline, and mint the sessions the tests sign in with.
export default async function globalSetup() {
  assertTestEnv();

  await migrateTestDatabase();
  await truncateAllTables();
  await seedOrganization();
  await mintStaffSession();
  await closeDatabase();
}
