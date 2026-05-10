// People API write helpers.
const BASE = 'https://people.googleapis.com/v1'

const headers = (accessToken) => ({
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
})

export async function peopleRequest(accessToken, method, path, body, params = {}) {
  const url = new URL(`${BASE}/${path}`)
  for (const [k, v] of Object.entries(params)) if (v != null) url.searchParams.set(k, v)
  const res = await fetch(url, {
    method, headers: headers(accessToken),
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`People API ${res.status}: ${await res.text()}`)

  return res.json()
}
