const GOOGLE_USERINFO = 'https://www.googleapis.com/oauth2/v2/userinfo'

export async function fetchUserInfo(access_token) {
  const res = await fetch(GOOGLE_USERINFO, {
    headers: { Authorization: `Bearer ${access_token}` },
  })
  if (!res.ok) throw new Error(`Google userinfo failed: ${await res.text()}`)

  return res.json()
}
