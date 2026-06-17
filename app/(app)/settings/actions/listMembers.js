'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { listMembers } from '@/lib/org/controllers/listMembers'

export const listMembersAction = withAdmin(
  (organizationId) => listMembers(organizationId),
  []
)
