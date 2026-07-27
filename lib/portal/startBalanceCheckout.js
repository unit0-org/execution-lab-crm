import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { createCheckoutSession } from '@/lib/stripe/createCheckoutSession'
import { balanceLineItem } from '@/lib/stripe/balanceLineItem'
import { outstandingPlanCents }
  from '@/lib/registration/controllers/outstandingPlanCents'
import { checkoutUrls } from './checkoutUrls'

// A checkout for what a seat still owes, for a registrant paying their
// refused balance themselves. The amount is derived now, so paying a
// balance we have since taken by other means is impossible.
export async function startBalanceCheckout(installment, registration, cohort) {
  const owed = await outstandingPlanCents(registration, cohort)

  if (owed.amountCents <= 0) return null

  const urls = checkoutUrls(cohort.slug)
  const session = await createCheckoutSession(stripeApiKey(), {
    lineItem: balanceLineItem(cohort.label, owed),
    email: registration.email,
    successUrl: urls.successUrl,
    cancelUrl: urls.cancelUrl,
    metadata: { installment_id: installment.id, cohort_id: cohort.id }
  })

  return session.url
}
