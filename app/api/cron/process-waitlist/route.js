import { processWaitlist, waitlistOrgIds }
  from '@/lib/waitlist/controllers'
import { authorizeCron } from '../sync-contacts/authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Hourly cron: advance the waitlist for every org with live activity —
// expire lapsed invites and notify the next person when a spot opens.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const orgIds = await waitlistOrgIds()

  for (const orgId of orgIds)
    await processWaitlist(orgId)

  return Response.json({ ok: true, orgs: orgIds.length })
}
