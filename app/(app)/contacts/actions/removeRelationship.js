'use server'

import { removeRelationship }
  from '@/lib/contact/controllers/removeRelationship'
import { withOrg } from '@/lib/auth/withOrg'

export const removeRelationshipAction = withOrg(
  (organizationId, formData) =>
    removeRelationship(organizationId, formData.get('id'))
)
