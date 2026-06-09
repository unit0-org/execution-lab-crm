'use server'

import { updateNote } from '@/lib/contacts/updateNote'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function updateNoteAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const id = formData.get('id')

  return updateNote(m.organizationId, id, formData.get('body'))
}
