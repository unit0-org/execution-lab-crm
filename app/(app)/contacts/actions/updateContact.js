'use server'

import { updateContact } from '@/lib/contacts/update'
import { withOrg } from '@/lib/auth/withOrg'

export const updateContactAction = withOrg(
  async (organizationId, formData) => {
    const id = formData.get('id')
    const value = formData.get('value') || null
    await updateContact(organizationId, id, { [formData.get('field')]: value })

    return { ok: true }
  }
)
