import { test } from './playwright.js';
import { closeDatabase } from '../database/connect.js';

// For files whose tests seed preconditions with a factory: closes the pool
// afterwards so the run can exit cleanly.
export function usesDatabase() {
  test.afterAll(async () => {
    await closeDatabase();
  });
}
