'use server'

import { currentUser } from '@/lib/auth/currentUser'
import { isPlatformOwner } from '@/lib/org/controllers/isPlatformOwner'
import { listFounderInvites } from '@/lib/org/controllers/listFounderInvites'

export async function listFounderInvitesAction() {
  const user = await currentUser()

  if (!isPlatformOwner(user?.email)) return []

  return listFounderInvites()
}
