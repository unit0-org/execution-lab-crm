'use server'

import { updateNote } from '@/lib/contacts/updateNote'
import { withOrg } from '@/lib/auth/withOrg'

export const updateNoteAction = withOrg((organizationId, formData) => {
  const id = formData.get('id')

  return updateNote(organizationId, id, formData.get('body'))
})
