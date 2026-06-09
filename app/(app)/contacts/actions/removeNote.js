'use server'

import { removeNote } from '@/lib/contacts/removeNote'
import { withOrg } from '@/lib/auth/withOrg'

export const removeNoteAction = withOrg(
  (organizationId, formData) =>
    removeNote(organizationId, formData.get('id'))
)
