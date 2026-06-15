import { sendPendingPaymentFollowups } from '@/lib/registration/controllers'
import { authorizeCron } from '../sync-contacts/authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Daily cron: email still-pending registrants a link to finish paying.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const result = await sendPendingPaymentFollowups()

  return Response.json({ ok: true, ...result })
}
