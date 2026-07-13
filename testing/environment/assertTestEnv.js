import { existsSync } from 'node:fs';
import { loadTestEnv } from './loadTestEnv.js';
import { testEnvPath } from './envPath.js';
import { REQUIRED_KEYS } from './requiredKeys.js';

function assertConfirmedTestDatabase() {
  if (process.env.E2E_TEST_DB !== '1') {
    throw new Error(
      'Refusing to run: set E2E_TEST_DB=1 in .env.test to confirm ' +
        'SUPABASE_DB_URL points at a throwaway TEST database.'
    );
  }
}

// Fails loudly before any run that touches the database or boots the app.
export function assertTestEnv() {
  loadTestEnv();

  if (!existsSync(testEnvPath)) {
    throw new Error(`Missing ${testEnvPath}. Copy .env.test.example first.`);
  }

  const missing = REQUIRED_KEYS.filter((key) => !process.env[key]);

  if (missing.length) {
    throw new Error(`.env.test is missing: ${missing.join(', ')}`);
  }

  assertConfirmedTestDatabase();
}
