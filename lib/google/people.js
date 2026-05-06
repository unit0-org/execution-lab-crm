const GOOGLE_PEOPLE_CONNECTIONS =
  'https://people.googleapis.com/v1/people/me/connections'

// Pages through Google Contacts for the authenticated account.
export async function* fetchConnections(access_token) {
  let pageToken
  do {
    const url = new URL(GOOGLE_PEOPLE_CONNECTIONS)
    url.searchParams.set('personFields', 'names,emailAddresses,phoneNumbers')
    url.searchParams.set('pageSize', '500')
    if (pageToken) url.searchParams.set('pageToken', pageToken)

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    if (!res.ok) throw new Error(`People API failed: ${await res.text()}`)

    const json = await res.json()
    yield json.connections || []
    pageToken = json.nextPageToken
  } while (pageToken)
}
