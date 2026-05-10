// Google Tasks API helper.
const BASE = 'https://tasks.googleapis.com/tasks/v1'

const headers = (accessToken) => ({
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
})

export async function tasksRequest(accessToken, method, path, body) {
  const res = await fetch(`${BASE}/${path}`, {
    method,
    headers: headers(accessToken),
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`Tasks API ${res.status}: ${await res.text()}`)

  return res.status === 204 ? null : res.json()
}
