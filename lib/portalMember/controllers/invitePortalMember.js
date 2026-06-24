import { PortalMember } from '../models'

// Invite an existing contact to the portal. Idempotent on contact_id;
// re-inviting a revoked member reopens the invite. Returns the row shape.
export async function invitePortalMember(contactId) {
  const [member] = await PortalMember.findOrCreate({
    where: { contact_id: contactId }
  })

  if (member.status === 'revoked') await member.update({ status: 'invited' })

  return { contactId, status: member.status }
}
