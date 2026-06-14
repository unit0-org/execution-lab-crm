'use server'

import { updateNote } from '@/lib/contact/controllers/updateNote'
import { withOrg } from '@/lib/auth/withOrg'

export const updateNoteAction = withOrg((organizationId, formData) => {
  const id = formData.get('id')
  const notedAt = formData.get('noted_at') || null

  return updateNote(organizationId, id, formData.get('body'), notedAt)
})
