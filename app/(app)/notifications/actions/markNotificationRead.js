'use server'

import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'
import { markRead } from '@/lib/notification/controllers/markRead'

export const markNotificationReadAction = withMember(async (id) => {
  const user = await currentUser()

  await markRead(user.id, id)

  return { ok: true }
})
