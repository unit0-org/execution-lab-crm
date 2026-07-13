import pg from 'pg';

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
    pool = new pg.Pool({
      connectionString: process.env.SUPABASE_DB_URL,
      ssl: { rejectUnauthorized: false },
      max: 3
    });
  }

  return pool;
}

export async function closeDatabase() {
  if (pool) await pool.end();

  pool = undefined;
}
