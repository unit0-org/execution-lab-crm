import pg from 'pg';
import { requiresSsl } from '../../lib/db/requiresSsl.js';

// Every mutating helper goes through this, so the interlock is unavoidable.
export function assertTestDatabase() {
  if (process.env.E2E_TEST_DB !== '1') {
    throw new Error('E2E_TEST_DB !== 1 — refusing to touch the database.');
  }
}

let pool;

export function database() {
  if (!pool) {
    assertTestDatabase();
    const connectionString = process.env.SUPABASE_DB_URL;
    const ssl = requiresSsl(connectionString)
      ? { rejectUnauthorized: false }
      : false;

    pool = new pg.Pool({ connectionString, ssl, max: 3 });
  }

  return pool;
}

export async function closeDatabase() {
  if (pool) await pool.end();

  pool = undefined;
}
