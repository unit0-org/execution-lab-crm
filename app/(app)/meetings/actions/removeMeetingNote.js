'use server'

import { removeMeetingNote } from '@/lib/meeting/controllers/removeMeetingNote'
import { withMember } from '@/lib/auth/withMember'

export const removeMeetingNoteAction = withMember(
  (id) => removeMeetingNote(id)
)
