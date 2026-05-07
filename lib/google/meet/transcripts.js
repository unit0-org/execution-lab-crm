import { meetGet } from './api'

export async function* fetchTranscripts(accessToken, recordName) {
  const json = await meetGet(accessToken, `${recordName}/transcripts`)
  yield* json.transcripts || []
}

// Pages through transcript text entries (speaker turns).
export async function* fetchTranscriptEntries(accessToken, transcriptName) {
  let pageToken
  do {
    const params = { pageSize: 200 }
    if (pageToken) params.pageToken = pageToken
    const json = await meetGet(accessToken, `${transcriptName}/entries`, params)
    yield* json.transcriptEntries || []
    pageToken = json.nextPageToken
  } while (pageToken)
}
