import { getAccount } from '../controllers/getAccount'
import { getAccessToken } from '../getAccessToken'
import { deleteTask } from './deleteTask'

// Delete a CRM task's linked Google task. No-op when it was never synced
// (no google id / account). Takes the task's stored sync linkage.
export async function pushTaskDelete(link) {
  if (!link.google_task_id || !link.google_account_email) return

  const account = await getAccount(link.google_account_email)

  if (!account) return

  const token = await getAccessToken(account.refresh_token)
  await deleteTask(token, link.google_tasklist_id, link.google_task_id)
}
