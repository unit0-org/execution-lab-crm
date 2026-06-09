'use server'

import { removeFact } from '@/lib/contacts/removeFact'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removeNuggetAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return removeFact(m.organizationId, formData.get('id'))
}
