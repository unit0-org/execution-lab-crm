const URL_BASE = 'https://people.googleapis.com/v1/people/me/connections'
const FIELDS = 'names,emailAddresses,phoneNumbers,metadata'

const buildUrl = ({ syncToken, pageToken }) => {
  const u = new URL(URL_BASE)
  u.searchParams.set('personFields', FIELDS)
  u.searchParams.set('pageSize', '500')
  if (syncToken) u.searchParams.set('syncToken', syncToken)
  else u.searchParams.set('requestSyncToken', 'true')
  if (pageToken) u.searchParams.set('pageToken', pageToken)
  return u
}

// Pages People API connections, calling onBatch with each page's
// connections array. Uses syncToken when provided. Returns
// { nextSyncToken, expired }. expired=true means the syncToken was
// invalidated server-side; the caller should retry without one.
export async function syncConnections(accessToken, syncToken, onBatch) {
  let pageToken, nextSyncToken = null
  do {
    const res = await fetch(buildUrl({ syncToken, pageToken }), {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    if (res.status === 410) return { expired: true }
    if (!res.ok) throw new Error(`People API failed: ${await res.text()}`)
    const json = await res.json()
    if (json.connections?.length) await onBatch(json.connections)
    pageToken = json.nextPageToken
    if (json.nextSyncToken) nextSyncToken = json.nextSyncToken
  } while (pageToken)
  return { nextSyncToken, expired: false }
}
