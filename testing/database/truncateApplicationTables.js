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

// Wipes the application's own tables. Deliberately leaves auth.users alone —
// truncating it mid-run would delete the signed-in staff user out from under
// the session every back-office test depends on.
export async function truncateApplicationTables() {
  assertTestDatabase();

  const tables = await listApplicationTables();

  if (!tables.length) return;

  await database().query(
    `truncate table ${tables.join(', ')} restart identity cascade`
  );
}
