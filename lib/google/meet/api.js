// Low-level fetch helper for the Google Meet REST API (v2).
// Throws on non-2xx so callers can surface real errors.
const BASE = 'https://meet.googleapis.com/v2'

export async function meetGet(accessToken, path, params = {}) {
  const url = new URL(`${BASE}/${path}`)
  for (const [k, v] of Object.entries(params)) {
    if (v != null) url.searchParams.set(k, v)
  }
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!res.ok) throw new Error(`Meet API ${res.status}: ${await res.text()}`)

  return res.json()
}
