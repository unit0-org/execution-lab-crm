import { verifyWebhook } from '@/lib/stripe/verifyWebhook'
import { importPayment } from '@/lib/purchase/controllers/importPayment'

const PAID = 'payment_intent.succeeded'

// Stripe calls this on new payments; verify, then record the payment.
export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  try {
    const event = verifyWebhook(body, signature)

    if (event.type === PAID) await importPayment(event.data.object)
  } catch (e) {
    return new Response(e.message, { status: 400 })
  }

  return new Response('ok')
}
