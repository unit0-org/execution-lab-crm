import { SyncState } from '../models/SyncState'

// Stamp a named sync as just-run; return the new ISO time.
export async function markSynced(name) {
  const now = new Date()

  await SyncState.upsert({ name, last_synced_at: now })

  return now.toISOString()
}
