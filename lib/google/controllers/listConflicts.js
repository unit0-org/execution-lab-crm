import { SyncConflict } from '../models/SyncConflict'
import { contactNameMap } from './contactNameMap'
import { conflictRow } from './conflictRow'

// The unresolved sync conflicts, newest first, each enriched with the
// affected contact's display name.
export async function listConflicts() {
  const conflicts = await SyncConflict.scope('unresolved').findAll({
    order: [['created_at', 'DESC']]
  })
  const ids = conflicts.map((c) => c.contact_id)
  const names = await contactNameMap(ids)

  return conflicts.map((c) => conflictRow(c, names))
}
