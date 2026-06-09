'use server'

import { addRelationship } from '@/lib/contacts/addRelationship'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function addRelationshipAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const fromId = formData.get('contact_id')
  const typeId = formData.get('relationship_type_id') || null

  return addRelationship(m.organizationId, fromId,
    formData.get('to_contact_id'), typeId, formData.get('custom_label'))
}
