import { database, assertTestDatabase } from './connect.js';

async function listApplicationTables() {
  const { rows } = await database().query(
    "select tablename from pg_tables where schemaname = 'public'"
  );

  return rows
    .map((row) => row.tablename)
    .filter((name) => !name.includes('schema_migrations'))
    .map((name) => `"public"."${name}"`);
}

// Wipes every application table plus the test auth users, so each run starts
// clean. The migration ledger is left intact.
export async function truncateAllTables() {
  assertTestDatabase();

  const tables = await listApplicationTables();

  if (!tables.length) return;

  await database().query(
    `truncate table ${tables.join(', ')} restart identity cascade`
  );
  await database().query('delete from auth.users');
}
