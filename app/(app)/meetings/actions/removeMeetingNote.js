'use server'

import { removeMeetingNote } from '@/lib/meeting/controllers/removeMeetingNote'
import { withMember } from '@/lib/auth/withMember'

export const removeMeetingNoteAction = withMember(
  (formData) => removeMeetingNote(formData.get('id'))
)
