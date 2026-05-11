import { listSyncableAccounts } from './meet/listSyncableAccounts'
import { syncMeetAccount } from './meet/syncAccount'
import { syncCalendarAccount } from './calendar/syncAccount'
import { runSync } from './runSync'
import { beginSync, finishSync } from './progress'
import { clearOrphanSyncs } from './clearOrphans'

// Iterate every connected Google account and sync each enabled source.
// Failures isolated per account per source — the rest still run. Each
// account flips through the same sync_status state machine the manual
// sidebar Sync button uses, so the UI stays accurate even when the
// cron drives the work.
export async function syncAllSources(supabase) {
  await clearOrphanSyncs(supabase)
  const accounts = await listSyncableAccounts(supabase)
  const report = []
  for (const account of accounts) {
    const row = { email: account.email }
    const errs = []
    await beginSync(supabase, account.id)
    const guard = (label, p) => p.then((r) => Object.assign(row, r)).catch((e) => errs.push(`${label}: ${e.message}`))
    await Promise.all([
      guard('contacts', runSync(supabase, account).then((contacts) => ({ contacts }))),
      guard('calendar', syncCalendarAccount(supabase, account)),
      guard('meet',     syncMeetAccount(supabase, account)),
    ])
    await finishSync(supabase, account.id, errs.join('; ') || null)
    if (errs.length) row.errors = errs
    report.push(row)
  }
  return report
}
