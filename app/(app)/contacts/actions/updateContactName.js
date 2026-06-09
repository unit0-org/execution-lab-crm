'use server'

import { updateContact } from '@/lib/contacts/update'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function updateContactNameAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return updateContact(m.organizationId, formData.get('id'), {
    first_name: formData.get('first_name') || null,
    last_name: formData.get('last_name') || null
  })
}
