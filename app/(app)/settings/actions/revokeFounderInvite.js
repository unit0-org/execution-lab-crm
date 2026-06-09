'use server'

import { currentUser } from '@/lib/auth/currentUser'
import { isPlatformOwner } from '@/lib/org/controllers/isPlatformOwner'
import { revokeFounderInvite } from '@/lib/org/controllers/revokeFounderInvite'

export async function revokeFounderInviteAction(id) {
  const user = await currentUser()

  if (!isPlatformOwner(user?.email)) return { error: 'Not allowed' }

  return revokeFounderInvite(id)
}
