import { GoogleAccount } from '../models/GoogleAccount'

// The primary connected Google account (the one whose refresh token our
// pushes sync through), or null when none is connected.
export async function primaryAccount() {
  const row = await GoogleAccount.findOne({ where: { is_primary: true } })

  return row ? row.toJSON() : null
}
