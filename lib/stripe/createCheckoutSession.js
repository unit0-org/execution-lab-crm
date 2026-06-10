import { stripe } from './client'

// Open a Stripe Checkout Session for one cohort seat; returns its id+url.
export async function createCheckoutSession(apiKey, params) {
  const session = await stripe(apiKey).checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: params.priceId, quantity: 1 }],
    customer_email: params.email,
    allow_promotion_codes: true,
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: params.metadata
  })

  return { id: session.id, url: session.url }
}
