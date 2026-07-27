import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { checkoutDiscountCode } from '@/lib/portal/checkoutDiscountCode'
import { resolvePlanAmounts } from '@/lib/portal/resolvePlanAmounts'
import { attachPaidCharges } from './attachPaidCharges'

// What this seat still owes: its discounted price (resolved by the same
// helpers checkout used, so the discount is identical) less every cent
// Stripe has actually captured for it. Derived at charge time, so a refund
// or a part-payment in between is accounted for rather than ignored.
export async function outstandingPlanCents(registration, cohort) {
  const apiKey = stripeApiKey()
  const code = await checkoutDiscountCode(cohort, registration, apiKey)
  const amounts = await resolvePlanAmounts(cohort, apiKey, code)
  const [seat] = await attachPaidCharges([registration])

  return {
    amountCents: amounts.totalCents - (seat.paid_amount_cents || 0),
    currency: amounts.currency
  }
}
