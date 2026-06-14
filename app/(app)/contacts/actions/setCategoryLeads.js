'use server'

import { setCategoryLeads } from '@/lib/contact/controllers/setCategoryLeads'
import { withOrg } from '@/lib/auth/withOrg'

export const setCategoryLeadsAction = withOrg(
  (organizationId, id, includeInLeads) =>
    setCategoryLeads(organizationId, id, includeInLeads)
)
