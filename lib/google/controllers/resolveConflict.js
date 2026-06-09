import { Contact } from '@/lib/db/models'
import { SyncConflict } from '../models/SyncConflict'
import { conflictPatch } from './conflictPatch'
import { pushConflictToGoogle } from './pushConflictToGoogle'

const applyGoogleWin = (organizationId, conflict) => {
  const patch = conflictPatch(conflict.field, conflict.google_value)
  const where = { id: conflict.contact_id, organization_id: organizationId }

  return Contact.update(patch, { where })
}

// Resolve a sync conflict by picking a winner: 'google' overwrites the
// CRM contact, 'crm' pushes the CRM value back to Google. Either way the
// conflict is marked resolved.
export async function resolveConflict(organizationId, id, winner) {
  const conflict = await SyncConflict.findOne({
    where: { id, organization_id: organizationId, resolved_at: null }
  })

  if (!conflict) return { error: 'not found' }

  if (winner === 'google') await applyGoogleWin(organizationId, conflict)
  else await pushConflictToGoogle(organizationId, conflict)

  await conflict.update({ resolved_at: new Date() })

  return { ok: true }
}
