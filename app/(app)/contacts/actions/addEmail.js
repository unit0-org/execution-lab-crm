'use server'

import { addEmail } from '@/lib/contacts/addEmail'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function addEmailAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const contactId = formData.get('contact_id')

  return addEmail(m.organizationId, contactId, formData.get('email'))
}
