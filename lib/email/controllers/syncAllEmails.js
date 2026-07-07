import { syncableGoogleAccounts }
  from '@/lib/google/controllers/syncableGoogleAccounts'
import { syncEmails } from './syncEmails'

// Sync Gmail activity for every connected account, returning a per-account
// result (and the total imported) for the cron run log.
export async function syncAllEmails() {
  const accounts = await syncableGoogleAccounts()
  const results = []

  for (const { email } of accounts) {
    const result = await syncEmails(email)

    results.push({ email, ...result })
  }

  return { accounts: accounts.length, imported: sumImported(results), results }
}

function sumImported(results) {
  return results.reduce((total, run) => total + (run.imported || 0), 0)
}
