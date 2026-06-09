'use server'

import { removeMeetingNote } from '@/lib/meeting/controllers/removeMeetingNote'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removeMeetingNoteAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return removeMeetingNote(formData.get('id'))
}
