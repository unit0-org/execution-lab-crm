import { syncAllMeetings }
  from '@/lib/meeting/controllers/syncAllMeetings'
import { recordCronRun } from '@/lib/cron/controllers/recordCronRun'
import { authorizeCron } from '../sync-contacts/authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Daily cron: sync Google Calendar meetings for every connected account,
// so meetings land in the background instead of only on a page visit.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const result = await recordCronRun('sync-meetings', syncAllMeetings)

  return Response.json({ ok: true, ...result })
}
