import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { createCheckoutSession } from '@/lib/stripe/createCheckoutSession'
import { checkoutDiscountCode } from './checkoutDiscountCode'
import { checkoutLineItem } from './checkoutLineItem'
import { checkoutUrls } from './checkoutUrls'

// Open the Stripe Checkout Session for a pending registration, applying the
// single effective discount (the earned reward, or the registrant's own
// code). On the payment plan it buys the deposit instead of the whole seat,
// and keeps the card on file for the second half.
export async function startCheckout(cohort, registration) {
  const apiKey = stripeApiKey()
  const urls = checkoutUrls(cohort.slug)
  const code = await checkoutDiscountCode(cohort, registration, apiKey)
  const item = await checkoutLineItem(cohort, registration, apiKey, code)

  return createCheckoutSession(apiKey, {
    ...item,
    email: registration.email,
    savesCard: registration.payment_plan,
    successUrl: urls.successUrl,
    cancelUrl: urls.cancelUrl,
    metadata: { registration_id: registration.id, cohort_id: cohort.id }
  })
}
