import { sendPendingPaymentFollowups } from '@/lib/registration/controllers'
import { recordCronRun } from '@/lib/cron/controllers/recordCronRun'
import { authorizeCron } from '../sync-contacts/authorizeCron'

const UNAUTHORIZED = new Response('unauthorized', { status: 401 })

// Daily cron: email still-pending registrants a link to finish paying.
export async function GET(request) {
  if (!authorizeCron(request)) return UNAUTHORIZED

  const result =
    await recordCronRun('payment-followups', sendPendingPaymentFollowups)

  return Response.json({ ok: true, ...result })
}
