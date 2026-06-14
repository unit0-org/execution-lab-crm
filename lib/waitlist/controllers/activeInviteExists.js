import { Op } from 'sequelize'
import { WaitlistEntry } from '../models'

// True while an unexpired invite is still out — only one person holds the
// open spot at a time (Story 3.2 AC: notify the single next person).
export async function activeInviteExists() {
  const count = await WaitlistEntry.count({
    where: {
      status: 'invited',
      invite_expires_at: { [Op.gt]: new Date() }
    }
  })

  return count > 0
}
