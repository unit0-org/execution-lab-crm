'use server'

import { currentUser } from '@/lib/auth/currentUser'
import { isPlatformOwner } from '@/lib/org/controllers/isPlatformOwner'
import { createFounderInvite } from '@/lib/org/controllers/createFounderInvite'

export async function createFounderInviteAction(formData) {
  const user = await currentUser()

  if (!isPlatformOwner(user?.email)) return { error: 'Not allowed' }

  return createFounderInvite(formData.get('email'), user.email)
}
