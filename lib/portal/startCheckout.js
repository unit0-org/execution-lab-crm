import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { createCheckoutSession } from '@/lib/stripe/createCheckoutSession'
import { resolvePromotionCode } from '@/lib/stripe/resolvePromotionCode'
import { checkoutDiscountCode } from './checkoutDiscountCode'
import { checkoutUrls } from './checkoutUrls'

// Open the Stripe Checkout Session for a pending registration, applying the
// single effective discount (the earned reward, or the registrant's own code).
export async function startCheckout(cohort, registration) {
  const apiKey = stripeApiKey()
  const urls = checkoutUrls(cohort.slug)
  const code = await checkoutDiscountCode(cohort, registration)
  const promotionCodeId = await resolvePromotionCode(apiKey, code)

  return createCheckoutSession(apiKey, {
    priceId: cohort.stripe_price_id,
    email: registration.email,
    promotionCodeId,
    successUrl: urls.successUrl,
    cancelUrl: urls.cancelUrl,
    metadata: { registration_id: registration.id, cohort_id: cohort.id }
  })
}
