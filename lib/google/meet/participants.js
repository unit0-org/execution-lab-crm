import { meetGet } from './api'

// Pages through participants for one conferenceRecord.
// `recordName` is the full name like "conferenceRecords/abc-123".
export async function* fetchParticipants(accessToken, recordName) {
  let pageToken
  do {
    const params = { pageSize: 100 }
    if (pageToken) params.pageToken = pageToken
    const json = await meetGet(accessToken, `${recordName}/participants`, params)
    yield* json.participants || []
    pageToken = json.nextPageToken
  } while (pageToken)
}
