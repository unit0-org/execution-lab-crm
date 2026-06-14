'use server'

import { addRelationship } from '@/lib/contact/controllers/addRelationship'
import { withMember } from '@/lib/auth/withMember'

export const addRelationshipAction = withMember((formData) => {
  const fromId = formData.get('contact_id')
  const typeId = formData.get('relationship_type_id') || null

  return addRelationship(fromId,
    formData.get('to_contact_id'), typeId, formData.get('custom_label'))
})
