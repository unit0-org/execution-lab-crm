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

  return {
    accounts: accounts.length,
    imported: sumField(results, 'imported'),
    updated: sumField(results, 'updated'),
    results
  }
}

function sumField(results, field) {
  return results.reduce((total, run) => total + (run[field] || 0), 0)
}
