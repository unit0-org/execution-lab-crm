import { getAccount } from '@/lib/google/controllers/getAccount'
import { getAccessToken } from '@/lib/google/getAccessToken'
import { listRemoteTasks } from '@/lib/google/tasks'
import { reconcileTask } from './reconcileTask'
import { taskSyncTally } from './taskSyncTally'

// Reflect one account's Google Tasks changes (since updatedMin) onto the
// CRM. A disconnected account is skipped, not stamped.
export async function syncAccountTasks(email, updatedMin) {
  const account = await getAccount(email)

  if (!account) return { skipped: true }

  const token = await getAccessToken(account.refresh_token)
  const remote = await listRemoteTasks(token, updatedMin)
  const outcomes = []

  for (const task of remote) {
    outcomes.push(await reconcileTask(task))
  }

  return { scanned: remote.length, ...taskSyncTally(outcomes) }
}
