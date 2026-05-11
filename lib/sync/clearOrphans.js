// A sync run that gets killed mid-flight (Vercel function timeout,
// node crash) leaves google_accounts.sync_status = 'running' forever,
// blocking the next attempt. Before we start any new sync, demote
// anything stuck "running" longer than the watchdog window.

const STALE_MINUTES = 15

export async function clearOrphanSyncs(supabase) {
  const cutoff = new Date(Date.now() - STALE_MINUTES * 60_000).toISOString()
  await supabase.from('google_accounts').update({
    sync_status:       'error',
    sync_error:        'orphaned: worker died before finishSync (function timeout or crash)',
    sync_completed_at: new Date().toISOString(),
    sync_phase:        null,
  }).eq('sync_status', 'running').lt('sync_started_at', cutoff)
}
