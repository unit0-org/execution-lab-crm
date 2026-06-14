import { GoogleAccount } from '../models/GoogleAccount'
import { membershipFor } from '@/lib/org/controllers/membershipFor'

// Persist the Google refresh token captured at sign-in so we can sync
// the user's calendar server-side later. It is only present on consent.
export async function rememberGoogleToken(session) {
  const user = session?.user
  const token = session?.provider_refresh_token

  if (!user?.email || !token) return

  const m = await membershipFor(user.id, user.email)

  if (!m) return

  await saveToken(user.email, token)
}

const saveToken = async (email, token) => {
  const [account, created] = await GoogleAccount.findOrCreate({
    where: { email },
    defaults: { email, refresh_token: token }
  })

  if (!created) await account.update({ refresh_token: token })
}
