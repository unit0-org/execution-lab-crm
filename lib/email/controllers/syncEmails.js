import { getAccount } from '@/lib/google/controllers/getAccount'
import { pullEmailsSafely } from './pullEmailsSafely'
import { markEmailsSynced } from './markEmailsSynced'

// Sync one account's Gmail into contact activity, advancing its watermark
// only on a real pull (a scope-less account is skipped, not stamped, so it
// retries once reconnected).
export async function syncEmails(email) {
  const account = await getAccount(email)

  if (!account) return { error: 'google_not_connected' }

  const result = await pullEmailsSafely(email, account)

  if (result.skipped) return result

  const lastSyncedAt = await markEmailsSynced(email)

  return { ...result, lastSyncedAt }
}
