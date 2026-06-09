import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { exchangeCode } from './exchangeCode'
import { googleUserEmail } from './googleUserEmail'
import { connectGoogleAccount } from './connectGoogleAccount'
import { redirectUri } from './redirectUri'

// Exchange the code, resolve the org, and store the account's token.
// Throws on missing membership so the route can show an error.
export async function finishGoogleConnect(code, origin) {
  const { refreshToken, accessToken } =
    await exchangeCode(code, redirectUri(origin))
  const email = await googleUserEmail(accessToken)
  const m = await currentMembership()

  if (!m) throw new Error('no_membership')

  return connectGoogleAccount(m.organizationId, email, refreshToken)
}
