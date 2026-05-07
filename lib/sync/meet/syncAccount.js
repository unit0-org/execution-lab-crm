import { fetchConferenceRecords } from '@/lib/google/meet/conferenceRecords'
import { refreshAccessToken } from '@/lib/google/tokens'
import { syncOneRecord } from './syncOneRecord'
import { cursorISO, bumpCursor } from './cursor'

// Sync every Meet conference record for one google_accounts row that
// hasn't been ingested yet. Returns { meetings: N }.
export async function syncMeetAccount(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)
  const since = cursorISO(account)

  let meetings = 0
  for await (const record of fetchConferenceRecords(access_token, since)) {
    await syncOneRecord(supabase, access_token, record)
    meetings += 1
  }

  await bumpCursor(supabase, account.id)
  return { meetings }
}
