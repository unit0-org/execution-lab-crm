import { Op } from 'sequelize'
import { GoogleAccount } from '../models/GoogleAccount'

// Every connected account (by email) that can sync calendar meetings —
// i.e. it still holds a refresh token. Used by the background sync cron.
export async function syncableMeetingAccounts() {
  const rows = await GoogleAccount.findAll({
    where: { refresh_token: { [Op.ne]: null } },
    attributes: ['email']
  })

  return rows.map((row) => row.toJSON())
}
