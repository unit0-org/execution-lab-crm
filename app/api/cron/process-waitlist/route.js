import { processWaitlist } from '@/lib/waitlist/controllers'
import { recordCronRun } from '@/lib/cron/controllers/recordCronRun'
import { authorizeCron } from '../sync-contacts/authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Daily cron: advance the waitlist — expire lapsed invites and notify
// the next person when a spot opens.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const result = await recordCronRun('process-waitlist', processWaitlist)

  return Response.json({ ok: true, ...result })
}
