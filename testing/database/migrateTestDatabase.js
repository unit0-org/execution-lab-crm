import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { database, assertTestDatabase } from './connect.js';
import { repoRoot } from '../config/paths.js';

const run = promisify(execFile);

// scripts/migrate.mjs reads this ledger but never creates it — on a real
// project the Supabase CLI already did. A fresh test project has none.
async function ensureMigrationLedger() {
  await database().query('create schema if not exists supabase_migrations');
  await database().query(
    `create table if not exists supabase_migrations.schema_migrations (
       version text primary key,
       name text,
       statements text[]
     )`
  );
}

// Reuse the repo's own migration runner against the test database.
export async function migrateTestDatabase() {
  assertTestDatabase();
  await ensureMigrationLedger();

  await run('node', ['scripts/migrate.mjs'], {
    cwd: repoRoot,
    env: { ...process.env, VERCEL_ENV: '' }
  });
}
