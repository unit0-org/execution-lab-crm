'use server'

import { updateContact } from '@/lib/contact/controllers/update'
import { withOrg } from '@/lib/auth/withOrg'

export const updateContactNameAction = withOrg(
  (organizationId, formData) =>
    updateContact(organizationId, formData.get('id'), {
      first_name: formData.get('first_name') || null,
      last_name: formData.get('last_name') || null
    })
)
