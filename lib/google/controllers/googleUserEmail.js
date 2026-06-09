const USERINFO_URL = 'https://www.googleapis.com/oauth2/v2/userinfo'

// The email of the Google account behind this access token.
export async function googleUserEmail(accessToken) {
  const res = await fetch(USERINFO_URL, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  const data = await res.json()

  if (!res.ok) throw new Error(data.error?.message || 'userinfo failed')

  return data.email
}
