import { Op } from 'sequelize'
import { GoogleAccount } from '../models/GoogleAccount'

// Every connected account (by email) that still holds a refresh token, so a
// background sync can mint access tokens for it. Shared by the meeting and
// email sync crons.
export async function syncableGoogleAccounts() {
  const rows = await GoogleAccount.findAll({
    where: { refresh_token: { [Op.ne]: null } },
    attributes: ['email']
  })

  return rows.map((row) => row.toJSON())
}
