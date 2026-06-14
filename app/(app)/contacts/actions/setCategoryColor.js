'use server'

import { setCategoryColor } from '@/lib/contact/controllers/setCategoryColor'
import { withOrg } from '@/lib/auth/withOrg'

export const setCategoryColorAction = withOrg(
  (organizationId, id, color) =>
    setCategoryColor(organizationId, id, color)
)
