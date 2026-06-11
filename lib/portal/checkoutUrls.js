import { portalUrl } from './portalUrl'

// Absolute Stripe success/cancel URLs; the {CHECKOUT_SESSION_ID} literal
// is left for Stripe to substitute after payment.
export function checkoutUrls(slug) {
  const successUrl =
    `${portalUrl('/confirmation')}?session_id={CHECKOUT_SESSION_ID}`

  return { successUrl, cancelUrl: portalUrl(`/register/${slug}`) }
}
