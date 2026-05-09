import { calGet } from './api'

const PATH = 'calendars/primary/events'
const FALLBACK_DAYS = 60

const fallbackTimeMin = () =>
  new Date(Date.now() - FALLBACK_DAYS * 86400000).toISOString()

const buildParams = ({ syncToken, pageToken }) => {
  const p = { maxResults: 250, singleEvents: true }
  if (syncToken) p.syncToken = syncToken
  else { p.timeMin = fallbackTimeMin(); p.orderBy = 'startTime' }
  if (pageToken) p.pageToken = pageToken
  return p
}

// Pages calendar events, calling onItem per event. Uses syncToken when
// provided. Returns { nextSyncToken, expired }. expired=true means
// the syncToken was invalidated; caller retries without one.
export async function syncEvents(accessToken, syncToken, onItem) {
  let pageToken, nextSyncToken = null
  do {
    const json = await calGet(accessToken, PATH, buildParams({ syncToken, pageToken }))
    if (json?.__status === 410) return { expired: true }
    for (const ev of json.items || []) await onItem(ev)
    pageToken = json.nextPageToken
    if (json.nextSyncToken) nextSyncToken = json.nextSyncToken
  } while (pageToken)
  return { nextSyncToken, expired: false }
}
