import { calGet } from './api'

// Pages through events on the user's primary calendar from `since` onward.
export async function* fetchEvents(accessToken, since) {
  let pageToken
  do {
    const params = {
      timeMin: since,
      maxResults: 250,
      singleEvents: true,
      orderBy: 'startTime',
    }
    if (pageToken) params.pageToken = pageToken
    const json = await calGet(accessToken, 'calendars/primary/events', params)
    yield* json.items || []
    pageToken = json.nextPageToken
  } while (pageToken)
}
