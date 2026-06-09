import { FounderInvite } from '../models'

// Delete a pending (unclaimed) invite by id.
export async function revokeFounderInvite(id) {
  const invite = await FounderInvite.findByPk(id)

  if (!invite || !invite.isPending()) return { error: 'Cannot revoke' }

  await invite.destroy()

  return { ok: true }
}
