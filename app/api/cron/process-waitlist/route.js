import { processWaitlist } from '@/lib/waitlist/controllers'
import { authorizeCron } from '../sync-contacts/authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Hourly cron: advance the waitlist — expire lapsed invites and notify
// the next person when a spot opens.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  await processWaitlist()

  return Response.json({ ok: true })
}
