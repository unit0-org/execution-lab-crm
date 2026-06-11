import { activePriceId } from '@/lib/cohort/controllers'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { createCheckoutSession } from '@/lib/stripe/createCheckoutSession'
import { resolvePromotionCode } from '@/lib/stripe/resolvePromotionCode'
import { todayIso } from './todayIso'
import { checkoutUrls } from './checkoutUrls'

// Open the Stripe Checkout Session for a pending registration, applying
// the cohort's preset promo code when it resolves to an active one.
export async function startCheckout(cohort, registration) {
  const apiKey = stripeApiKey()
  const urls = checkoutUrls(cohort.slug)
  const promotionCodeId = await resolvePromotionCode(apiKey, cohort.promo_code)

  return createCheckoutSession(apiKey, {
    priceId: activePriceId(cohort, todayIso()),
    email: registration.email,
    promotionCodeId,
    successUrl: urls.successUrl,
    cancelUrl: urls.cancelUrl,
    metadata: { registration_id: registration.id, cohort_id: cohort.id }
  })
}
