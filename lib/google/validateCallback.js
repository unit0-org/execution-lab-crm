import { consumeOAuthState, matchesState } from './state'

// Returns { ok: true, code } when callback is valid, or { ok: false, error }.
export async function validateCallback(url) {
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const oauthError = url.searchParams.get('error')
  const expected = await consumeOAuthState()

  if (oauthError) return { ok: false, error: `Google: ${oauthError}` }
  if (!code || !matchesState(state, expected)) {
    return { ok: false, error: 'Invalid OAuth state' }
  }

  return { ok: true, code }
}
