import { readdir, readFile } from 'node:fs/promises'
import { connect } from './connect.mjs'
import { applyOne } from './applyMigration.mjs'

const DIR = new URL('../supabase/migrations/', import.meta.url)

async function main() {
  if (process.env.VERCEL_ENV === 'preview')
    return console.log('migrate: preview deploy — skipping')
  const connectionString = process.env.SUPABASE_DB_URL
  if (!connectionString)
    return console.warn('migrate: SUPABASE_DB_URL unset — skipping')
  const db = await connect(connectionString)
  const { rows } = await db.query('select name from supabase_migrations.schema_migrations')
  const done = new Set(rows.map((r) => r.name))
  const files = (await readdir(DIR)).filter((f) => f.endsWith('.sql')).sort()
  for (const file of files) {
    const [, version, name] = file.match(/^(\d+)_(.+)\.sql$/)
    if (done.has(name)) continue
    await applyOne(db, version, name, await readFile(new URL(file, DIR), 'utf8'))
  }
  await db.end()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
