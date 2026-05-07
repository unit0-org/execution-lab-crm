import { listSyncableAccounts } from './listSyncableAccounts'
import { syncMeetAccount } from './syncAccount'

// Iterate every connected account and sync each one. Failures on one
// account don't stop the others — they're collected into the report.
export async function syncAllMeetAccounts(supabase) {
  const accounts = await listSyncableAccounts(supabase)
  const report = []
  for (const account of accounts) {
    try {
      const result = await syncMeetAccount(supabase, account)
      report.push({ email: account.email, ...result })
    } catch (err) {
      report.push({ email: account.email, error: err.message })
    }
  }

  return report
}
