import { OrganizationUser } from '../models'

// The signed-in member's editable profile, found by Supabase user_id.
export async function currentMemberProfile(userId) {
  const row = await OrganizationUser.findOne({
    where: { user_id: userId }
  })

  if (!row) return null

  return {
    id: row.id,
    displayName: row.display_name,
    email: row.email,
    role: row.role
  }
}
