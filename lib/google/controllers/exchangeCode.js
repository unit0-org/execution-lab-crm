const TOKEN_URL = 'https://oauth2.googleapis.com/token'

const body = (code, redirectUri) => new URLSearchParams({
  code,
  redirect_uri: redirectUri,
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  grant_type: 'authorization_code'
})

// Exchange an OAuth authorization code for refresh + access tokens.
export async function exchangeCode(code, redirectUri) {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body(code, redirectUri)
  })
  const data = await res.json()

  if (!res.ok) throw new Error(data.error_description || 'code exchange failed')

  return { refreshToken: data.refresh_token, accessToken: data.access_token }
}
