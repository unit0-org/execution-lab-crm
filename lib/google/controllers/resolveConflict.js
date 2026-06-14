import { Contact } from '@/lib/contact/models'
import { SyncConflict } from '../models/SyncConflict'
import { conflictPatch } from './conflictPatch'
import { pushConflictToGoogle } from './pushConflictToGoogle'

const applyGoogleWin = (conflict) => {
  const patch = conflictPatch(conflict.field, conflict.google_value)

  return Contact.update(patch, { where: { id: conflict.contact_id } })
}

// Resolve a sync conflict by picking a winner: 'google' overwrites the
// CRM contact, 'crm' pushes the CRM value back to Google. Either way the
// conflict is marked resolved.
export async function resolveConflict(id, winner) {
  const conflict = await SyncConflict.findOne({
    where: { id, resolved_at: null }
  })

  if (!conflict) return { error: 'not found' }

  if (winner === 'google') await applyGoogleWin(conflict)
  else await pushConflictToGoogle(conflict)

  await conflict.update({ resolved_at: new Date() })

  return { ok: true }
}
