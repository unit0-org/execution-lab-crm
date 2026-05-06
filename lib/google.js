// Google OAuth + People API helpers.
// Per-account OAuth flow: each connected Gmail account stores its own
// access_token + refresh_token in google_accounts.

const GOOGLE_AUTH = 'https://accounts.google.com/o/oauth2/v2/auth'
const GOOGLE_TOKEN = 'https://oauth2.googleapis.com/token'
const GOOGLE_USERINFO = 'https://www.googleapis.com/oauth2/v2/userinfo'
const GOOGLE_PEOPLE_CONNECTIONS =
  'https://people.googleapis.com/v1/people/me/connections'

export const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/contacts.readonly',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
]

export function siteOrigin(headersList) {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  const host = headersList?.get('host')
  return host ? `https://${host}` : 'http://localhost:3000'
}

export function buildAuthUrl({ origin, state }) {
  const url = new URL(GOOGLE_AUTH)
  url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID)
  url.searchParams.set('redirect_uri', `${origin}/api/google/callback`)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', GOOGLE_SCOPES.join(' '))
  url.searchParams.set('access_type', 'offline')
  url.searchParams.set('prompt', 'consent')
  url.searchParams.set('include_granted_scopes', 'true')
  url.searchParams.set('state', state)
  return url.toString()
}

export async function exchangeCode({ origin, code }) {
  const res = await fetch(GOOGLE_TOKEN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${origin}/api/google/callback`,
      grant_type: 'authorization_code',
    }),
  })
  if (!res.ok) throw new Error(`Google token exchange failed: ${await res.text()}`)
  return res.json() // { access_token, refresh_token, expires_in, scope, ... }
}

export async function refreshAccessToken(refresh_token) {
  const res = await fetch(GOOGLE_TOKEN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      refresh_token,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      grant_type: 'refresh_token',
    }),
  })
  if (!res.ok) throw new Error(`Google token refresh failed: ${await res.text()}`)
  return res.json() // { access_token, expires_in, scope, ... }
}

export async function fetchUserInfo(access_token) {
  const res = await fetch(GOOGLE_USERINFO, {
    headers: { Authorization: `Bearer ${access_token}` },
  })
  if (!res.ok) throw new Error(`Google userinfo failed: ${await res.text()}`)
  return res.json() // { email, name, picture, ... }
}

// Pages through `connections` (Google Contacts) for the authenticated account.
export async function* fetchConnections(access_token) {
  let pageToken
  do {
    const url = new URL(GOOGLE_PEOPLE_CONNECTIONS)
    url.searchParams.set('personFields', 'names,emailAddresses,phoneNumbers')
    url.searchParams.set('pageSize', '500')
    if (pageToken) url.searchParams.set('pageToken', pageToken)

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    if (!res.ok) throw new Error(`People API failed: ${await res.text()}`)

    const json = await res.json()
    yield json.connections || []
    pageToken = json.nextPageToken
  } while (pageToken)
}
