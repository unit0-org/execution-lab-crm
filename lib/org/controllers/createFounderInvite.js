import { FounderInvite } from '../models'

// Issue a single-use, email-bound invite to found a new organization.
export async function createFounderInvite(email, invitedBy) {
  if (!email) return { error: 'An email is required' }

  await FounderInvite.create({ email, invited_by: invitedBy })

  return { ok: true }
}
