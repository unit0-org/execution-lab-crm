import { redirectUri } from './origin'

const GOOGLE_TOKEN = 'https://oauth2.googleapis.com/token'

async function postToken(body) {
  const res = await fetch(GOOGLE_TOKEN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(body),
  })
  if (!res.ok) throw new Error(`Google token call failed: ${await res.text()}`)

  return res.json()
}

export const exchangeCode = ({ origin, code }) => postToken({
  code,
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirect_uri: redirectUri(origin),
  grant_type: 'authorization_code',
})

export const refreshAccessToken = (refresh_token) => postToken({
  refresh_token,
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  grant_type: 'refresh_token',
})
