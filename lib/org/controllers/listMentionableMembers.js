import { Op } from 'sequelize'
import { OrganizationUser } from '../models'

// Signed-in members who can be mentioned/notified, with the display name
// and email a mention needs. Excludes invites that haven't been claimed.
export async function listMentionableMembers() {
  const rows = await OrganizationUser.findAll({
    where: { user_id: { [Op.ne]: null } },
    order: [['display_name', 'ASC']]
  })

  return rows.map((row) => ({
    userId: row.user_id,
    name: row.display_name || row.email || 'Member',
    email: row.email
  }))
}
