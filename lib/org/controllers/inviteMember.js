import { OrganizationUser } from '../models'

// Invite a member by email; linked to their user_id when they sign in.
export async function inviteMember(organizationId, email, role) {
  if (!email) return { error: 'An email is required' }

  await OrganizationUser.create({
    organization_id: organizationId,
    email,
    role: role || 'member'
  })

  return { ok: true }
}
