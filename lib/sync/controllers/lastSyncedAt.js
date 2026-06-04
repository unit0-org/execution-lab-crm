import { SyncState } from '../models/SyncState'

// The ISO time a named sync last ran, or null if it never has.
export async function lastSyncedAt(name) {
  const row = await SyncState.findByPk(name)

  return row?.last_synced_at?.toISOString() || null
}
