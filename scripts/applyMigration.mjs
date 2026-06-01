// Apply one migration in a transaction and record it in
// supabase_migrations.schema_migrations — the same ledger the Supabase
// CLI/dashboard use, keyed by name so already-applied files are skipped.
export async function applyOne(db, version, name, sql) {
  console.log(`migrate: applying ${version}_${name}`)
  await db.query('begin')
  try {
    await db.query(sql)
    await db.query(
      'insert into supabase_migrations.schema_migrations'
        + ' (version, name, statements) values ($1, $2, $3)',
      [version, name, [sql]]
    )
    await db.query('commit')
  } catch (err) {
    await db.query('rollback')
    throw new Error(`migrate: ${name} failed — ${err.message}`)
  }
}
