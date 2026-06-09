import { SyncConflict } from '../models/SyncConflict'

// How many unresolved conflicts the org currently has.
export function openConflictCount(organizationId) {
  return SyncConflict.count({
    where: { organization_id: organizationId, resolved_at: null }
  })
}
