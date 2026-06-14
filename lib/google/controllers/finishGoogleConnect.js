import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { exchangeCode } from './exchangeCode'
import { googleUserEmail } from './googleUserEmail'
import { connectGoogleAccount } from './connectGoogleAccount'
import { redirectUri } from './redirectUri'

// Exchange the code, require an authenticated member, and store the
// account's token. Throws on missing membership so the route errors.
export async function finishGoogleConnect(code, origin) {
  const { refreshToken, accessToken } =
    await exchangeCode(code, redirectUri(origin))
  const email = await googleUserEmail(accessToken)
  const m = await currentMembership()

  if (!m) throw new Error('no_membership')

  return connectGoogleAccount(email, refreshToken)
}
