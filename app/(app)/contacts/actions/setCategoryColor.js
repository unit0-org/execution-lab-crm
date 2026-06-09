'use server'

import { setCategoryColor } from '@/lib/contacts/setCategoryColor'
import { withOrg } from '@/lib/auth/withOrg'

export const setCategoryColorAction = withOrg(
  (organizationId, id, color) =>
    setCategoryColor(organizationId, id, color)
)
