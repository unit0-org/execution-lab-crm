'use server'

import { listRelationshipTypes }
  from '@/lib/contact/controllers/listRelationshipTypes'
import { withOrg } from '@/lib/auth/withOrg'

export const listRelationshipTypesAction = withOrg(
  (organizationId) => listRelationshipTypes(organizationId),
  []
)
