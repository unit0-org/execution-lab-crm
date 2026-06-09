'use server'

import { addRelationship } from '@/lib/contacts/addRelationship'
import { withOrg } from '@/lib/auth/withOrg'

export const addRelationshipAction = withOrg((organizationId, formData) => {
  const fromId = formData.get('contact_id')
  const typeId = formData.get('relationship_type_id') || null

  return addRelationship(organizationId, fromId,
    formData.get('to_contact_id'), typeId, formData.get('custom_label'))
})
