// Low-level Calendar API v3 helper.
const BASE = 'https://www.googleapis.com/calendar/v3'

export async function calGet(accessToken, path, params = {}) {
  const url = new URL(`${BASE}/${path}`)
  for (const [k, v] of Object.entries(params)) {
    if (v != null) url.searchParams.set(k, v)
  }
  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } })
  if (res.status === 410) return { __status: 410 }
  if (!res.ok) throw new Error(`Calendar API ${res.status}: ${await res.text()}`)

  return res.json()
}
