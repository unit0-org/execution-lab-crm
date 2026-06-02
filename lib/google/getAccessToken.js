const TOKEN_URL = 'https://oauth2.googleapis.com/token'

const body = (refreshToken) => new URLSearchParams({
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  refresh_token: refreshToken,
  grant_type: 'refresh_token'
})

// Exchange a stored refresh token for a short-lived access token.
export async function getAccessToken(refreshToken) {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body(refreshToken)
  })
  const data = await res.json()

  if (!res.ok) throw new Error(data.error_description || 'token refresh failed')

  return data.access_token
}
