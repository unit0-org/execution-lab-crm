'use server'

import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'
import { listNotifications }
  from '@/lib/notification/controllers/listNotifications'

export const listNotificationsAction = withMember(async () => {
  const user = await currentUser()

  return listNotifications(user.id)
}, [])
