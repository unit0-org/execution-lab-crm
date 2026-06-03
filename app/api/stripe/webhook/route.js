import { verifyWebhook } from '@/lib/stripe/verifyWebhook'
import { importCharge } from '@/lib/purchase/controllers/importCharge'

const PAID = 'charge.succeeded'

// Stripe calls this on new charges; verify, then record the charge.
export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  try {
    const event = verifyWebhook(body, signature)

    if (event.type === PAID) await importCharge(event.data.object)
  } catch (e) {
    return new Response(e.message, { status: 400 })
  }

  return new Response('ok')
}
