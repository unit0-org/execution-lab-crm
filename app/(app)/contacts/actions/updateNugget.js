'use server'

import { updateFact } from '@/lib/contacts/updateFact'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function updateNuggetAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const id = formData.get('id')
  const label = formData.get('label')

  return updateFact(m.organizationId, id, label, formData.get('value'))
}
