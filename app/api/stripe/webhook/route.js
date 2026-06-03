import { verifyWebhook } from '@/lib/stripe/verifyWebhook'
import { importSession } from '@/lib/purchase/controllers/importSession'

const PAID = 'checkout.session.completed'

// Stripe calls this on new purchases; verify, then record the session.
export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  try {
    const event = verifyWebhook(body, signature)

    if (event.type === PAID) await importSession(event.data.object)
  } catch (e) {
    return new Response(e.message, { status: 400 })
  }

  return new Response('ok')
}
