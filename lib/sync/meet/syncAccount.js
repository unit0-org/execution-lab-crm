import { fetchConferenceRecords } from '@/lib/google/meet/conferenceRecords'
import { refreshAccessToken } from '@/lib/google/tokens'
import { syncOneRecord } from './syncOneRecord'
import { cursorISO, bumpCursor } from './cursor'
import { bump } from '../progress'

export async function syncMeetAccount(supabase, account) {
  const { access_token } = await refreshAccessToken(account.refresh_token)
  const since = cursorISO(account)

  let meetings = 0
  for await (const record of fetchConferenceRecords(access_token, since)) {
    await syncOneRecord(supabase, access_token, record)
    meetings += 1
    if (meetings % 5 === 0) await bump(supabase, account.id, { sync_meet_done: meetings })
  }
  await bump(supabase, account.id, { sync_meet_done: meetings })

  await bumpCursor(supabase, account.id)
  return { meetings }
}
