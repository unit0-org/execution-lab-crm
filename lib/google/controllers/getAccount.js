import { GoogleAccount } from '../models/GoogleAccount'

// The Google account for this email, or null if not connected.
export async function getAccount(email) {
  const row = await GoogleAccount.findOne({
    where: { email }
  })

  return row ? row.toJSON() : null
}
