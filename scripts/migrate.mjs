import { readdir, readFile } from 'node:fs/promises'
import pg from 'pg'
import { applyOne } from './applyMigration.mjs'

const DIR = new URL('../supabase/migrations/', import.meta.url)

async function main() {
  const env = process.env.VERCEL_ENV
  if (env && env !== 'production')
    return console.log(`migrate: ${env} deploy — skipping`)
  const connectionString = process.env.SUPABASE_DB_URL
  if (!connectionString)
    return console.warn('migrate: SUPABASE_DB_URL unset — skipping')
  const db = new pg.Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
  })
  await db.connect()
  const { rows } = await db.query(
    'select name from supabase_migrations.schema_migrations'
  )
  const done = new Set(rows.map((r) => r.name))
  const files = (await readdir(DIR)).filter((f) => f.endsWith('.sql')).sort()
  for (const file of files) {
    const [, version, name] = file.match(/^(\d+)_(.+)\.sql$/)
    if (done.has(name)) continue
    const sql = await readFile(new URL(file, DIR), 'utf8')
    await applyOne(db, version, name, sql)
  }
  await db.end()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
