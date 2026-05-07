import { listSyncableAccounts } from './meet/listSyncableAccounts'
import { syncMeetAccount } from './meet/syncAccount'
import { syncCalendarAccount } from './calendar/syncAccount'

// Iterate every connected Google account and sync each enabled source.
// Failures isolated per account per source — the rest still run.
export async function syncAllSources(supabase) {
  const accounts = await listSyncableAccounts(supabase)
  const report = []
  for (const account of accounts) {
    const row = { email: account.email }
    try { Object.assign(row, await syncMeetAccount(supabase, account)) }
    catch (err) { row.meetError = err.message }
    try { Object.assign(row, await syncCalendarAccount(supabase, account)) }
    catch (err) { row.calendarError = err.message }
    report.push(row)
  }

  return report
}
