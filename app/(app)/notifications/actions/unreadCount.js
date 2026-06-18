'use server'

import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'
import { unreadCount }
  from '@/lib/notification/controllers/unreadCount'

export const unreadCountAction = withMember(async () => {
  const user = await currentUser()

  return unreadCount(user.id)
}, 0)
