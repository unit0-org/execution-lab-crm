import { SyncState } from '../models/SyncState'

// Stamp a named sync as just-run for an org; return the new ISO time.
export async function markSynced(organizationId, name) {
  const now = new Date()

  await SyncState.upsert({
    organization_id: organizationId,
    name,
    last_synced_at: now
  })

  return now.toISOString()
}
