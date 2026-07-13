// Direct access to the TEST Postgres for setup/teardown: migrate, truncate,
// seed. Uses raw pg (never the app's Sequelize) so tests stay decoupled from
// app internals. Every mutating call is gated on the E2E_TEST_DB interlock.

import pg from 'pg';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { randomUUID } from 'node:crypto';

const run = promisify(execFile);
const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..', '..');

// Matches the organization seeded by supabase/migrations/0017_organization.sql.
export const ORG_ID = '00000000-0000-4000-8000-000000000001';

function assertTestDb() {
  if (process.env.E2E_TEST_DB !== '1') {
    throw new Error('E2E_TEST_DB !== 1 — refusing to touch the database.');
  }
}

let pool;

export function db() {
  if (!pool) {
    assertTestDb();
    pool = new pg.Pool({
      connectionString: process.env.SUPABASE_DB_URL,
      ssl: { rejectUnauthorized: false },
      max: 3
    });
  }

  return pool;
}

export async function closeDb() {
  if (pool) await pool.end();

  pool = undefined;
}

// scripts/migrate.mjs reads the ledger but never creates it — on a real project
// the Supabase CLI already did. A fresh test project has none, so bootstrap it
// with the same shape the CLI uses (version, name, statements).
async function ensureMigrationLedger() {
  await db().query('create schema if not exists supabase_migrations');
  await db().query(
    `create table if not exists supabase_migrations.schema_migrations (
       version text primary key,
       name text,
       statements text[]
     )`
  );
}

// Reuse the repo's own migration runner against the test database.
export async function migrate() {
  assertTestDb();
  await ensureMigrationLedger();
  await run('node', ['scripts/migrate.mjs'], {
    cwd: repoRoot,
    env: { ...process.env, VERCEL_ENV: '' }
  });
}

// Wipe every application table (public schema), leaving the migration ledger
// (schema lives in the supabase_migrations schema) intact.
export async function truncateAll() {
  assertTestDb();

  const { rows } = await db().query(
    `select tablename from pg_tables where schemaname = 'public'`
  );
  const tables = rows
    .map((row) => `"public"."${row.tablename}"`)
    .filter((name) => !name.includes('schema_migrations'));

  if (!tables.length) return;

  await db().query(
    `truncate table ${tables.join(', ')} restart identity cascade`
  );

  // Test auth users too, so each run mints a fresh session from a clean slate.
  await db().query('delete from auth.users');
}

export async function seedBaseline() {
  assertTestDb();
  await db().query(
    `insert into organization (id, name) values ($1, $2)
       on conflict (id) do nothing`,
    [ORG_ID, 'The Execution Lab (E2E)']
  );
}

// Link an auth user to the org so they pass the staff gate.
export async function seedStaffMembership(userId, _email, role = 'admin') {
  assertTestDb();
  await db().query(
    `insert into organization_user (id, organization_id, user_id, role)
       values ($1, $2, $3, $4)
       on conflict (organization_id, user_id) do update set role = excluded.role`,
    [randomUUID(), ORG_ID, userId, role]
  );
}

// Find-or-create a GoTrue auth user with a known password, over Postgres. This
// avoids needing a service-role key: the test project's auth schema is ours to
// seed, and Supabase still issues a real JWT when we sign in with this password.
const NO_INSTANCE = '00000000-0000-0000-0000-000000000000';

export async function seedAuthUser(email, password) {
  assertTestDb();

  const existing = await db().query(
    'select id from auth.users where email = $1',
    [email]
  );

  if (existing.rows.length) return existing.rows[0].id;

  const userId = randomUUID();

  // GoTrue scans the token columns into non-nullable strings — they must be ''
  // (not NULL), or sign-in fails with "Database error querying schema".
  await db().query(
    `insert into auth.users (
       id, instance_id, aud, role, email, encrypted_password,
       email_confirmed_at, created_at, updated_at,
       raw_app_meta_data, raw_user_meta_data,
       confirmation_token, recovery_token, email_change,
       email_change_token_new, email_change_token_current,
       phone_change, phone_change_token, reauthentication_token
     ) values (
       $1, $2, 'authenticated', 'authenticated', $3, crypt($4, gen_salt('bf')),
       now(), now(), now(),
       '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb,
       '', '', '', '', '', '', '', ''
     )`,
    [userId, NO_INSTANCE, email, password]
  );

  await db().query(
    `insert into auth.identities (
       id, user_id, provider_id, provider, identity_data,
       last_sign_in_at, created_at, updated_at
     ) values (
       $1, $2::uuid, $3, 'email',
       jsonb_build_object('sub', $2::text, 'email', $3::text,
                          'email_verified', true),
       now(), now(), now()
     )`,
    [randomUUID(), userId, email]
  );

  return userId;
}

// Create a contact that already owns an email — for the duplicate-email path.
export async function seedContactWithEmail(email, firstName = 'Existing') {
  assertTestDb();
  const contactId = randomUUID();

  await db().query(
    `insert into contact (id, first_name) values ($1, $2)`,
    [contactId, firstName]
  );
  await db().query(
    `insert into contact_email (id, contact_id, email) values ($1, $2, $3)`,
    [randomUUID(), contactId, email.trim().toLowerCase()]
  );

  return contactId;
}
