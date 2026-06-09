'use server'

import { currentUser } from '@/lib/auth/currentUser'
import { isPlatformOwner } from '@/lib/org/controllers/isPlatformOwner'

export async function amIPlatformOwnerAction() {
  const user = await currentUser()

  return isPlatformOwner(user?.email)
}
