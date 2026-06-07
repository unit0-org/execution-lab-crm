'use server'

import { addRelationship } from '@/lib/contacts/addRelationship'

export async function addRelationshipAction(formData) {
  const fromId = formData.get('contact_id')
  const toId = formData.get('to_contact_id')
  const typeId = formData.get('relationship_type_id') || null

  return addRelationship(fromId, toId, typeId, formData.get('custom_label'))
}
