'use server'

import { withMember } from '@/lib/auth/withMember'
import { listMentionableMembers }
  from '@/lib/org/controllers/listMentionableMembers'

export const listMentionableMembersAction = withMember(
  () => listMentionableMembers(),
  []
)
