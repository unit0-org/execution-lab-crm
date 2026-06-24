import { PortalMember } from '../models'

// Revoke a contact's portal access, keeping the row for audit.
export async function revokePortalMember(contactId) {
  const member = await PortalMember.findByContact(contactId)

  if (!member) return { contactId, status: null }

  await member.update({ status: 'revoked' })

  return { contactId, status: 'revoked' }
}
