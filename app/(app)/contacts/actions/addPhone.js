'use server'

import { addPhone } from '@/lib/contacts/addPhone'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function addPhoneAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const contactId = formData.get('contact_id')

  return addPhone(m.organizationId, contactId, formData.get('phone'))
}
