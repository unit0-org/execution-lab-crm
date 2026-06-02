import { GoogleAccount } from '../models/GoogleAccount'

// Persist the Google refresh token captured at sign-in so we can sync
// the user's calendar server-side later. It is only present on consent.
export async function rememberGoogleToken(session) {
  const email = session?.user?.email
  const token = session?.provider_refresh_token

  if (!email || !token) return

  const [account, created] = await GoogleAccount.findOrCreate({
    where: { email },
    defaults: { email, refresh_token: token }
  })

  if (!created) await account.update({ refresh_token: token })
}
