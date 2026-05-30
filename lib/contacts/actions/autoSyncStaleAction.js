import { runSyncAccountAction } from './syncAccountAction'

// Background refresh on app open: re-sync accounts whose last completed
// sync is stale (or never ran) and aren't already syncing. The per-account
// running guard lives in runSyncAccountAction, so this stays idempotent.
const STALE_MS = 60 * 60 * 1000

const isStale = (a) =>
  !a.sync_completed_at || Date.now() - new Date(a.sync_completed_at).getTime() > STALE_MS

export async function runAutoSyncStale(supabase) {
  const { data } = await supabase
    .from('google_accounts')
    .select('id, sync_status, sync_completed_at')

  const stale = (data || []).filter((a) => a.sync_status !== 'running' && isStale(a))
  await Promise.all(stale.map((a) => runSyncAccountAction(supabase, a.id)))
  return { ok: true, started: stale.length }
}
