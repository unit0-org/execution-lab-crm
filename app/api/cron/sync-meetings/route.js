import { syncableMeetingAccounts }
  from '@/lib/google/controllers/syncableMeetingAccounts'
import { syncMeetings } from '@/lib/meeting/controllers/syncMeetings'
import { authorizeCron } from '../sync-contacts/authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Daily cron: sync Google Calendar meetings for every connected account,
// so meetings land in the background instead of only on a page visit.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const accounts = await syncableMeetingAccounts()

  for (const { organization_id, email } of accounts)
    await syncMeetings(organization_id, email, true)

  return Response.json({ ok: true, accounts: accounts.length })
}
