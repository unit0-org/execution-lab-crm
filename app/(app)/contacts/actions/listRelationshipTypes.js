'use server'

import { listRelationshipTypes } from '@/lib/contacts/listRelationshipTypes'
import { withOrg } from '@/lib/auth/withOrg'

export const listRelationshipTypesAction = withOrg(
  (organizationId) => listRelationshipTypes(organizationId),
  []
)
