import { FounderInvite } from '../models'
import { provisionOrganization } from './provisionOrganization'

// Claim an invite: it must match the signed-in email and be unclaimed.
// On success, provision the founder's own organization (they are admin).
export async function acceptFounderInvite(token, userId, email, name) {
  const invite = await FounderInvite.findOne({ where: { token } })

  if (!invite || !invite.isPending()) return { error: 'Invite not valid' }

  if (invite.email !== email) {
    return { error: 'This invite is for a different account' }
  }

  const org = await provisionOrganization(name || 'My organization', userId)
  await invite.markAccepted(userId, org.id)

  return { organizationId: org.id }
}
