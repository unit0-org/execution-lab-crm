'use server'

import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'
import { listMentionableMembers }
  from '@/lib/org/controllers/listMentionableMembers'

const listForActor = async () => {
  const user = await currentUser()

  return listMentionableMembers(user && user.id)
}

export const listMentionableMembersAction = withMember(listForActor, [])
