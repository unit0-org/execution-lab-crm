import { stripe } from './client'
import { checkoutDiscount } from './checkoutDiscount'

// Open a Stripe Checkout Session for one cohort seat; returns its id+url.
// A preset promotion code auto-applies; otherwise the manual promo box
// stays enabled for the customer.
export async function createCheckoutSession(apiKey, params) {
  const session = await stripe(apiKey).checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: params.priceId, quantity: 1 }],
    customer_email: params.email,
    ...checkoutDiscount(params.promotionCodeId),
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: params.metadata
  })

  return { id: session.id, url: session.url }
}
