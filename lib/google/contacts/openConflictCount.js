import { SyncConflict } from '../models/SyncConflict'

// How many unresolved conflicts there currently are.
export function openConflictCount() {
  return SyncConflict.count({
    where: { resolved_at: null }
  })
}
