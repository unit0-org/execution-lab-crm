import { activePriceId } from '@/lib/cohort/controllers'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { createCheckoutSession } from '@/lib/stripe/createCheckoutSession'
import { todayIso } from './todayIso'
import { checkoutUrls } from './checkoutUrls'

// Open the Stripe Checkout Session for a pending registration.
export function startCheckout(cohort, registration) {
  const apiKey = stripeApiKey()
  const urls = checkoutUrls(cohort.id)

  return createCheckoutSession(apiKey, {
    priceId: activePriceId(cohort, todayIso()),
    email: registration.email,
    successUrl: urls.successUrl,
    cancelUrl: urls.cancelUrl,
    metadata: { registration_id: registration.id, cohort_id: cohort.id }
  })
}
