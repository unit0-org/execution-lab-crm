// Wraps a People API call: auth + JSON headers, parsed body, error on
// non-OK. A 410 (expired sync token) throws an Error tagged status=410
// so listConnections can catch it and trigger a full resync.
export async function peopleFetch(accessToken, url, options = {}) {
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

  const err = new Error(data.error?.message || 'people api request failed')
  err.status = res.status

  throw err
}
