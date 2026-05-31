import pg from 'pg'

// The connection MUST use the Supavisor session pooler host
// (aws-0-<region>.pooler.supabase.com:5432). The direct host
// (db.<ref>.supabase.co) is IPv6-only and the API host (<ref>.supabase.co)
// is Cloudflare-fronted — both black-hole port 5432 from the build network.
const HINT = 'SUPABASE_DB_URL must use the Supavisor session pooler'
  + ' (aws-0-<region>.pooler.supabase.com:5432), not the direct or API host'

// Fail fast (~10s) instead of hanging on the default OS TCP timeout (~2 min).
export async function connect(connectionString) {
  const db = new pg.Client({ connectionString, connectionTimeoutMillis: 10000 })
  try {
    await db.connect()
  } catch (e) {
    if (['ETIMEDOUT', 'ECONNREFUSED', 'ENOTFOUND'].includes(e.code))
      throw new Error(`migrate: cannot reach the database — ${HINT}`)
    throw e
  }
  return db
}
