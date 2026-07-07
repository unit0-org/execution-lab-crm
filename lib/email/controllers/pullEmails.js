import { getAccessToken } from '@/lib/google/getAccessToken'
import { listMessageIds } from '@/lib/google/gmail'
import { emailSyncWindow } from './emailSyncWindow'
import { importMessage } from './importMessage'

const MAX_MESSAGES = 2000

// Pull the account's mail in the sync window, importing each message that
// mentions a known contact. Caps the scan at MAX_MESSAGES (newest first) to
// stay within the function's time budget; `truncated` flags an unfinished
// backfill for the next run. Returns { imported, scanned, truncated }.
export async function pullEmails(email, refreshToken, syncedAt) {
  const token = await getAccessToken(refreshToken)
  const query = emailSyncWindow(syncedAt)
  const { ids, truncated } = await listMessageIds(token, query, MAX_MESSAGES)
  let imported = 0

  for (const id of ids) imported += await importMessage(token, email, id)

  return { imported, scanned: ids.length, truncated }
}
