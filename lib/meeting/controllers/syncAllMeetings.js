import { syncableMeetingAccounts }
  from '@/lib/google/controllers/syncableMeetingAccounts'
import { syncMeetings } from './syncMeetings'

// Sync every connected calendar account, returning a per-account result
// (plus the total imported) so the cron log records what each sync did.
export async function syncAllMeetings() {
  const accounts = await syncableMeetingAccounts()
  const results = []

  for (const { email } of accounts) {
    const result = await syncMeetings(email, true)

    results.push({ email, ...result })
  }

  return { accounts: accounts.length, imported: sumImported(results), results }
}

function sumImported(results) {
  return results.reduce((total, run) => total + (run.imported || 0), 0)
}
