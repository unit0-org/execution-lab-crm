'use server'

import { removeRelationship } from '@/lib/contacts/removeRelationship'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removeRelationshipAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return removeRelationship(m.organizationId, formData.get('id'))
}
