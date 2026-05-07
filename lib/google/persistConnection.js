import { exchangeCode } from './tokens'
import { fetchUserInfo } from './userinfo'
import { upsertGoogleAccount } from './storeAccount'

// Exchange the OAuth code, fetch the Google user, persist the account.
// Returns { error } on failure or {} on success.
export async function persistConnection(supabase, { origin, code }) {
  const tokens = await exchangeCode({ origin, code })
  const info = await fetchUserInfo(tokens.access_token)
  const error = await upsertGoogleAccount(supabase, { tokens, info })

  return { error }
}
