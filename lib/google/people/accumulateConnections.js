import { fetchConnectionsPage } from './fetchConnectionsPage'

// Walk every page of connections, collecting raw people and the final
// sync token. Throws (incl. 410) up to listConnections.
export async function accumulateConnections(accessToken, syncToken) {
  const people = []
  let pageToken
  let nextSyncToken
  let more = true

  while (more) {
    const page = await fetchConnectionsPage(accessToken, syncToken, pageToken)

    people.push(...(page.connections || []))
    pageToken = page.nextPageToken
    nextSyncToken = page.nextSyncToken || nextSyncToken
    more = Boolean(pageToken)
  }

  return { people, nextSyncToken }
}
