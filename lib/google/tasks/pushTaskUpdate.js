import { getAccount } from '../controllers/getAccount'
import { getAccessToken } from '../getAccessToken'
import { patchTask } from './patchTask'
import { toGoogleTask } from './toGoogleTask'

// Push a CRM task's current fields to its linked Google task. No-op when
// the task was never synced (no google id / account).
export async function pushTaskUpdate(task) {
  if (!task.google_task_id || !task.google_account_email) return

  const account = await getAccount(task.google_account_email)

  if (!account) return

  const token = await getAccessToken(account.refresh_token)
  await patchTask(token, task.google_tasklist_id, task.google_task_id,
    toGoogleTask(task))
}
