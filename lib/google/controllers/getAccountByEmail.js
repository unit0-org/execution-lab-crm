import { GoogleAccount } from '../models/GoogleAccount'

export async function getAccountByEmail(email) {
  const row = await GoogleAccount.findOne({ where: { email } })

  return row ? row.toJSON() : null
}
