import { SyncState } from '../models/SyncState'

// The ISO time a named sync last ran, or null if never.
export async function lastSyncedAt(name) {
  const row = await SyncState.findOne({
    where: { name }
  })

  return row?.last_synced_at?.toISOString() || null
}
