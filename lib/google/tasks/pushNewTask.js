import { getAccessToken } from '../getAccessToken'
import { primaryAccount } from '../controllers/primaryAccount'
import { insertTask } from './insertTask'
import { toGoogleTask } from './toGoogleTask'

const DEFAULT_LIST = '@default'

// Push a new CRM task to the primary account's default Google Tasks list.
// Returns the sync linkage to persist, or null if no account is connected.
export async function pushNewTask(task) {
  const account = await primaryAccount()

  if (!account) return null

  const token = await getAccessToken(account.refresh_token)
  const { id } = await insertTask(token, DEFAULT_LIST, toGoogleTask(task))

  return {
    google_task_id: id, google_tasklist_id: DEFAULT_LIST,
    google_account_email: account.email
  }
}
