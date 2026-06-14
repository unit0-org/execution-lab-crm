'use server'

import { addNote } from '@/lib/contact/controllers/addNote'
import { withOrg } from '@/lib/auth/withOrg'

export const addNoteAction = withOrg((organizationId, formData) => {
  const contactId = formData.get('contact_id')
  const notedAt = formData.get('noted_at') || null

  return addNote(organizationId, contactId, formData.get('body'), notedAt)
})
