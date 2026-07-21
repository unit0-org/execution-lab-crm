import { syncableGoogleAccounts }
  from '@/lib/google/controllers/syncableGoogleAccounts'
import { lastSyncedAt } from '@/lib/sync/controllers/lastSyncedAt'
import { markSynced } from '@/lib/sync/controllers/markSynced'
import { syncAccountTasks } from './syncAccountTasks'

const JOB = 'sync-tasks'

// Reflect Google Tasks changes onto the CRM for every connected account,
// incrementally since the last run. Only CRM-originated tasks (those with a
// stored google_task_id) are reconciled; Google-native tasks are ignored.
export async function syncAllTasks() {
  const since = await lastSyncedAt(JOB)
  const accounts = await syncableGoogleAccounts()
  const results = []

  for (const { email } of accounts) {
    results.push({ email, ...await syncAccountTasks(email, since) })
  }

  const lastSynced = await markSynced(JOB)

  return { accounts: accounts.length, since, lastSynced, results }
}
