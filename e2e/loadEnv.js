// Loads .env.test into process.env without adding a dependency. The test suite
// runs against a DEDICATED Supabase test project — never the dev/prod database —
// so we keep its secrets in .env.test (gitignored) and refuse to run without it.

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
export const envPath = join(here, '..', '.env.test');

function parseEnv(text) {
  const out = {};

  for (const raw of text.split('\n')) {
    const line = raw.trim();

    if (!line || line.startsWith('#')) continue;

    const eq = line.indexOf('=');

    if (eq === -1) continue;

    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();

    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);

    out[key] = value;
  }

  return out;
}

// Loads .env.test into process.env if it exists (never overriding a value
// already set). Safe to call at config-load time — listing tests must work
// without credentials. Use assertTestEnv() to enforce them before a real run.
export function loadTestEnv() {
  if (!existsSync(envPath)) return {};

  const parsed = parseEnv(readFileSync(envPath, 'utf8'));

  for (const [key, value] of Object.entries(parsed)) {
    if (process.env[key] === undefined) process.env[key] = value;
  }

  return parsed;
}

const REQUIRED = [
  'E2E_TEST_DB',
  'SUPABASE_DB_URL',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
];

// Fails loudly before any run that touches the database or boots the app.
export function assertTestEnv() {
  loadTestEnv();

  if (!existsSync(envPath)) {
    throw new Error(
      `Missing ${envPath}. Copy .env.test.example and fill in a DEDICATED ` +
        'Supabase TEST project before running the suite.'
    );
  }

  const missing = REQUIRED.filter((key) => !process.env[key]);

  if (missing.length) {
    throw new Error(`.env.test is missing: ${missing.join(', ')}`);
  }

  if (process.env.E2E_TEST_DB !== '1') {
    throw new Error(
      'Refusing to run: set E2E_TEST_DB=1 in .env.test to confirm ' +
        'SUPABASE_DB_URL points at a throwaway TEST database.'
    );
  }
}
