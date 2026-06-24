import { PortalMember } from '../models'
import { ContactEmail } from '@/lib/contact/models'

const shape = (m) => ({ contactId: m.contact_id, status: m.status })

// The user's portal membership. By user_id first; else resolve the contact
// from the authenticated email and link it on first sign-in. Returns
// { contactId, status } or null when the email maps to no invited contact.
export async function portalMembershipFor(userId, email) {
  const byUser = await PortalMember.findByUser(userId)

  if (byUser) return shape(byUser)

  const contactId = email ? await ContactEmail.findContactId(email) : null
  const invite = contactId
    ? await PortalMember.findByContact(contactId)
    : null

  if (!invite || invite.status === 'revoked') return null

  await invite.linkUser(userId)

  return shape(invite)
}
