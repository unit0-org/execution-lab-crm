import { resolveWebhookEvent } from '@/lib/stripe/resolveWebhookEvent'
import { handlePaidCharge } from '@/lib/purchase/controllers/handlePaidCharge'

const PAID = 'charge.succeeded'

// Stripe calls this on new charges; identify the org by its webhook
// secret, then record the charge and invoice it.
export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  try {
    const found = await resolveWebhookEvent(body, signature)

    if (found.event.type === PAID)
      await handlePaidCharge(found.event.data.object, found.organizationId)
  } catch (e) {
    return new Response(e.message, { status: 400 })
  }

  return new Response('ok')
}
