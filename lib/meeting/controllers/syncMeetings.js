import { getAccount } from '@/lib/google/controllers/getAccount'
import { pullMeetings } from './pullMeetings'
import { markSynced } from './markSynced'
import { isFresh } from './isFresh'

// Sync recent Google Calendar meetings, throttled to once an hour unless
// forced. Returns the latest sync time so the UI can show it.
export async function syncMeetings(email, force) {
  const account = await getAccount(email)

  if (!account) return { error: 'google_not_connected' }

  if (!force && isFresh(account.last_synced_at))
    return { skipped: true, lastSyncedAt: account.last_synced_at }

  const counts = await pullMeetings(account.refresh_token)
  const lastSyncedAt = await markSynced(email)

  return { ...counts, lastSyncedAt }
}
