import { stripe } from './client'
import { checkoutDiscount } from './checkoutDiscount'
import { savedCardTerms } from './savedCardTerms'

// Open a Stripe Checkout Session for one cohort seat; returns its id+url.
// A preset promotion code auto-applies; otherwise the manual promo box
// stays enabled for the customer. `savesCard` keeps the card on file so the
// payment plan's second half can be taken off-session later.
export async function createCheckoutSession(apiKey, params) {
  const session = await stripe(apiKey).checkout.sessions.create({
    mode: 'payment',
    line_items: [params.lineItem],
    customer_email: params.email,
    ...checkoutDiscount(params.promotionCodeId),
    ...savedCardTerms(params.savesCard),
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: params.metadata
  })

  return { id: session.id, url: session.url }
}
