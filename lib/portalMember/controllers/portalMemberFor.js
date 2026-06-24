import { PortalMember } from '../models'

// The portal-member row for a contact (for the CRM status badge), or null.
export async function portalMemberForContact(contactId) {
  const member = await PortalMember.findByContact(contactId)

  return member ? { contactId, status: member.status } : null
}
