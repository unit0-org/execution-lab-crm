import { SyncState } from '../models/SyncState'

// The ISO time a named sync last ran for an org, or null if never.
export async function lastSyncedAt(organizationId, name) {
  const row = await SyncState.findOne({
    where: { organization_id: organizationId, name }
  })

  return row?.last_synced_at?.toISOString() || null
}
