import { calGet } from './api'

const PATH = 'calendars/primary/events'

// Google rejects nextSyncToken on responses that used timeMin / orderBy
// (https://developers.google.com/calendar/api/guides/sync). To get a
// sync token at all, the initial sync MUST omit those params — we
// trade a one-time bigger pull for permanent incremental syncs after.
const buildParams = ({ syncToken, pageToken }) => {
  const p = { maxResults: 250, singleEvents: true, showDeleted: true }
  if (syncToken)  p.syncToken  = syncToken
  if (pageToken)  p.pageToken  = pageToken
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
