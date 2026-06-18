'use server'

import { withMember } from '@/lib/auth/withMember'
import { currentUser } from '@/lib/auth/currentUser'
import { currentMemberProfile }
  from '@/lib/org/controllers/currentMemberProfile'

export const getMemberProfileAction = withMember(async () => {
  const user = await currentUser()
  const profile = await currentMemberProfile(user.id)

  return { ...profile, email: profile.email || user.email }
})
