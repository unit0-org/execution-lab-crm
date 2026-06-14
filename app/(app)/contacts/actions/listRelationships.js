'use server'

import { listRelationships } from '@/lib/contact/controllers/listRelationships'
import { withOrg } from '@/lib/auth/withOrg'

export const listRelationshipsAction = withOrg(
  (organizationId, contactId) =>
    listRelationships(organizationId, contactId),
  []
)
