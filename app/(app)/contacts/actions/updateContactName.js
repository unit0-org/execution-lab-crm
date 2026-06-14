'use server'

import { updateContact } from '@/lib/contact/controllers/update'
import { withMember } from '@/lib/auth/withMember'

export const updateContactNameAction = withMember(
  (formData) =>
    updateContact(formData.get('id'), {
      first_name: formData.get('first_name') || null,
      last_name: formData.get('last_name') || null
    })
)
