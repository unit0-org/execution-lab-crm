import { meetGet } from './api'

// Yields every conferenceRecord with start_time >= since (ISO string).
// Paginates internally — caller just consumes the items.
export async function* fetchConferenceRecords(accessToken, since) {
  let pageToken
  do {
    const params = { pageSize: 50, filter: `start_time>="${since}"` }
    if (pageToken) params.pageToken = pageToken
    const json = await meetGet(accessToken, 'conferenceRecords', params)
    yield* json.conferenceRecords || []
    pageToken = json.nextPageToken
  } while (pageToken)
}
