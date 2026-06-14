import { GoogleAccount } from '../models/GoogleAccount'

// Upsert the Google account for this email, storing the refresh token.
// The first connected account becomes the primary.
export async function connectGoogleAccount(email, token) {
  const count = await GoogleAccount.count()
  const [account, created] = await GoogleAccount.findOrCreate({
    where: { email },
    defaults: {
      email,
      refresh_token: token,
      is_primary: count === 0
    }
  })

  if (!created) await account.update({ refresh_token: token })

  return account.toJSON()
}
