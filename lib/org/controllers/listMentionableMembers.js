import { Op } from 'sequelize'
import { OrganizationUser } from '../models'

// Signed-in members who can be mentioned/notified, with the display name
// and email a mention needs. Excludes unclaimed invites and the caller
// themselves — you can't @-mention yourself.
export async function listMentionableMembers(excludeUserId) {
  const rows = await OrganizationUser.findAll({
    where: { user_id: { [Op.ne]: null } },
    order: [['display_name', 'ASC']]
  })

  return rows
    .filter((row) => row.user_id !== excludeUserId)
    .map((row) => ({
      userId: row.user_id,
      name: row.display_name || row.email || 'Member',
      email: row.email
    }))
}
