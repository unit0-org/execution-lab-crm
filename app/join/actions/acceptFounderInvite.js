'use server'

import { currentUser } from '@/lib/auth/currentUser'
import { acceptFounderInvite } from '@/lib/org/controllers/acceptFounderInvite'

export async function acceptFounderInviteAction(formData) {
  const user = await currentUser()

  if (!user) return { error: 'Sign in first' }

  const result = await acceptFounderInvite(formData.get('token'), user.id,
    user.email, formData.get('name'))

  return result.organizationId ? { ok: true } : result
}
