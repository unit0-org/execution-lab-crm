import { PortalMember } from '../models'
import { memberSignInEmail } from './memberSignInEmail'
import { applyMemberPassword } from './applyMemberPassword'

export const MIN_PASSWORD = 8

const TOO_SHORT = `Password must be at least ${MIN_PASSWORD} characters`
const REVOKED = 'Restore this member before setting a password'

// Give a member a password from the CRM, so they can be handed access
// directly instead of waiting to click an emailed link. Nothing is sent to
// the member — whoever sets it passes it on themselves.
export async function setMemberPassword(contactId, password) {
  if (!password || password.length < MIN_PASSWORD) return { error: TOO_SHORT }

  const member = await PortalMember.findByContact(contactId)

  if (!member) return { error: 'Not a portal member' }

  if (member.status === 'revoked') return { error: REVOKED }

  const email = await memberSignInEmail(contactId)

  if (!email) return { error: 'Add an email to this contact first' }

  return applyMemberPassword(member, email, password)
}
