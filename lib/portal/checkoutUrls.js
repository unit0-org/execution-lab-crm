import { siteOrigin } from './siteOrigin'

// Absolute Stripe success/cancel URLs; the {CHECKOUT_SESSION_ID} literal
// is left for Stripe to substitute after payment.
export function checkoutUrls(cohortId) {
  const origin = siteOrigin()
  const successUrl =
    `${origin}/portal/confirmation?session_id={CHECKOUT_SESSION_ID}`

  return { successUrl, cancelUrl: `${origin}/portal/register/${cohortId}` }
}
