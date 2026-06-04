'use server'

import { removeMeetingNote } from '@/lib/meeting/controllers/removeMeetingNote'

export async function removeMeetingNoteAction(formData) {
  return removeMeetingNote(formData.get('id'))
}
