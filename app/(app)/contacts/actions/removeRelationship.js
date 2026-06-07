'use server'

import { removeRelationship } from '@/lib/contacts/removeRelationship'

export async function removeRelationshipAction(formData) {
  return removeRelationship(formData.get('id'))
}
