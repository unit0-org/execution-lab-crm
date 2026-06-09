'use server'

import { removeNote } from '@/lib/contacts/removeNote'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removeNoteAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return removeNote(m.organizationId, formData.get('id'))
}
