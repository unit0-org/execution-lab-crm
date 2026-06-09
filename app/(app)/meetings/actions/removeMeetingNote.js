'use server'

import { removeMeetingNote } from '@/lib/meeting/controllers/removeMeetingNote'
import { withOrg } from '@/lib/auth/withOrg'

export const removeMeetingNoteAction = withOrg(
  (_organizationId, formData) => removeMeetingNote(formData.get('id'))
)
