'use server'

import { addFact } from '@/lib/contacts/addFact'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function addNuggetAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const contactId = formData.get('contact_id')
  const label = formData.get('label')

  return addFact(m.organizationId, contactId, label, formData.get('value'))
}
