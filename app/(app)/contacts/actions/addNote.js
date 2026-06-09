'use server'

import { addNote } from '@/lib/contacts/addNote'
import { withOrg } from '@/lib/auth/withOrg'

export const addNoteAction = withOrg((organizationId, formData) => {
  const contactId = formData.get('contact_id')

  return addNote(organizationId, contactId, formData.get('body'))
})
