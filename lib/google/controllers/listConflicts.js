import { SyncConflict } from '../models/SyncConflict'
import { contactNameMap } from './contactNameMap'
import { conflictRow } from './conflictRow'

// The org's unresolved sync conflicts, newest first, each enriched
// with the affected contact's display name.
export async function listConflicts(organizationId) {
  const conflicts = await SyncConflict.findAll({
    where: { organization_id: organizationId, resolved_at: null },
    order: [['created_at', 'DESC']]
  })
  const ids = conflicts.map((c) => c.contact_id)
  const names = await contactNameMap(organizationId, ids)

  return conflicts.map((c) => conflictRow(c, names))
}
