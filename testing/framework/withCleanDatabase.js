import { test } from './playwright.js';
import {
  truncateApplicationTables
} from '../database/truncateApplicationTables.js';
import { seedBaseline } from '../database/seedBaseline.js';
import { usesDatabase } from './usesDatabase.js';

// Opt IN only where the assertion is global — dashboard counts, "sold out",
// the leads pipeline — because those can't tolerate rows other tests left
// behind. Everywhere else, unique-by-default factories already keep tests
// independent, and a reset per test is a round trip we don't need to pay for.
export function withCleanDatabase() {
  test.beforeEach(async () => {
    await truncateApplicationTables();
    await seedBaseline();
  });

  usesDatabase();
}
