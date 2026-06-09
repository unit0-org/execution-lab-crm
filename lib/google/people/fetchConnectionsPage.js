import { peopleFetch } from './peopleFetch'

const API = 'https://people.googleapis.com/v1/people/me/connections'

const FIELDS = 'names,emailAddresses,phoneNumbers,birthdays,photos,metadata'

const query = (syncToken, pageToken) => {
  const q = new URLSearchParams({
    personFields: FIELDS,
    pageSize: '200',
    requestSyncToken: 'true'
  })

  if (syncToken) q.set('syncToken', syncToken)

  if (pageToken) q.set('pageToken', pageToken)

  return q
}

// Fetch one page of the signed-in user's connections.
export function fetchConnectionsPage(accessToken, syncToken, pageToken) {
  const url = `${API}?${query(syncToken, pageToken)}`

  return peopleFetch(accessToken, url)
}
