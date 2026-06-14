'use server'

import { removeRelationship }
  from '@/lib/contact/controllers/removeRelationship'
import { withMember } from '@/lib/auth/withMember'

export const removeRelationshipAction = withMember(
  (formData) =>
    removeRelationship(formData.get('id'))
)
