'use server'

import { updateContact } from '@/lib/contact/controllers/update'
import { withMember } from '@/lib/auth/withMember'

export const updateContactAction = withMember(
  async (formData) => {
    const id = formData.get('id')
    const value = formData.get('value') || null
    await updateContact(id, { [formData.get('field')]: value })

    return { ok: true }
  }
)
