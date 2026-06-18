import { OrganizationUser } from '../models'

// Let a member edit their own profile (display name), by Supabase user_id.
export async function updateMemberProfile(userId, data) {
  const row = await OrganizationUser.findOne({
    where: { user_id: userId }
  })

  if (!row) return null

  await row.update({ display_name: data.displayName })

  return { id: row.id, displayName: row.display_name }
}
