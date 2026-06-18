import { OrganizationUser } from '../models'

const shape = (m) => ({ organizationId: m.organization_id, role: m.role })

// The user's membership. On first sign-in, link the email invite to their
// user_id, keeping the email so we can still reach them (e.g. mention
// notifications). Returns { organizationId, role }.
export async function membershipFor(userId, email) {
  const byUser = await OrganizationUser.findOne({
    where: { user_id: userId }
  })

  if (byUser) return shape(byUser)

  const invite = await OrganizationUser.findOne({ where: { email } })

  if (!invite) return null

  await invite.update({ user_id: userId })

  return shape(invite)
}
