'use server'

import { setCategoryLeads } from '@/lib/contact/controllers/setCategoryLeads'
import { withMember } from '@/lib/auth/withMember'

export const setCategoryLeadsAction = withMember(
  (id, includeInLeads) =>
    setCategoryLeads(id, includeInLeads)
)
