// Wraps a Google Tasks API call: auth + JSON headers, parsed body, error
// on non-OK. A DELETE returns an empty body, hence the parse fallback.
export async function tasksFetch(accessToken, url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...options.headers
    }
  })
  const data = await res.json().catch(() => ({}))

  if (res.ok) return data

  const err = new Error(data.error?.message || 'tasks api request failed')
  err.status = res.status
  throw err
}
