'use server'

import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'
import { markAllRead } from '@/lib/notification/controllers/markAllRead'

export const markAllNotificationsReadAction = withMember(async () => {
  const user = await currentUser()

  await markAllRead(user.id)

  return { ok: true }
})
