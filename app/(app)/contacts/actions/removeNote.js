'use server'

import { removeNote } from '@/lib/contact/controllers/removeNote'
import { withOrg } from '@/lib/auth/withOrg'

export const removeNoteAction = withOrg(
  (organizationId, formData) =>
    removeNote(organizationId, formData.get('id'))
)
