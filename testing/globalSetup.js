import { assertTestEnv } from './environment/assertTestEnv.js';
import { migrateTestDatabase } from './database/migrateTestDatabase.js';
import {
  truncateApplicationTables
} from './database/truncateApplicationTables.js';
import { resetAuthUsers } from './database/resetAuthUsers.js';
import { seedOrganization } from './database/seedOrganization.js';
import { closeDatabase } from './database/connect.js';
import { mintStaffSession } from './session/mintStaffSession.js';

// Runs once before the suite. Sets up only the BASELINE — the organization and
// the signed-in staff user. Everything a single test needs beyond that is its
// own business, created with a factory (see database/factories).
export default async function globalSetup() {
  assertTestEnv();

  await migrateTestDatabase();
  await truncateApplicationTables();
  await resetAuthUsers();
  await seedOrganization();
  await mintStaffSession();
  await closeDatabase();
}
