import { GOOGLE_SCOPES } from './scopes'
import { redirectUri } from './origin'

const GOOGLE_AUTH = 'https://accounts.google.com/o/oauth2/v2/auth'

export function buildAuthUrl({ origin, state }) {
  const url = new URL(GOOGLE_AUTH)
  url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID)
  url.searchParams.set('redirect_uri', redirectUri(origin))
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', GOOGLE_SCOPES.join(' '))
  url.searchParams.set('access_type', 'offline')
  url.searchParams.set('prompt', 'consent')
  url.searchParams.set('include_granted_scopes', 'true')
  url.searchParams.set('state', state)

  return url.toString()
}
