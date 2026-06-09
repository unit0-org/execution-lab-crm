'use server'

import { currentUser } from '@/lib/auth/currentUser'
import { getFounderInvite } from '@/lib/org/controllers/getFounderInvite'

// Resolve a token for the join page: ok, wrong_email, or invalid.
export async function checkFounderInviteAction(token) {
  const user = await currentUser()
  const invite = await getFounderInvite(token)

  if (!invite || invite.accepted_at) return { status: 'invalid' }

  if (invite.email !== user?.email) return { status: 'wrong_email' }

  return { status: 'ok' }
}
