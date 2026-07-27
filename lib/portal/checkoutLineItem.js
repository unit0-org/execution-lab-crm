import { resolvePromotionCode } from '@/lib/stripe/resolvePromotionCode'
import { depositLineItem } from '@/lib/stripe/depositLineItem'
import { resolvePlanAmounts } from './resolvePlanAmounts'

const fullSeat = async (cohort, apiKey, code) => ({
  lineItem: { price: cohort.stripe_price_id, quantity: 1 },
  promotionCodeId: await resolvePromotionCode(apiKey, code)
})

const planDeposit = async (cohort, apiKey, code) => ({
  lineItem: depositLineItem(
    cohort.label, await resolvePlanAmounts(cohort, apiKey, code)
  ),
  promotionCodeId: null
})

// What this checkout is buying: the whole seat at the cohort's Stripe price
// with the discount applied by Stripe, or — on the payment plan — a deposit
// priced here with the discount already inside it (see resolvePlanAmounts).
export function checkoutLineItem(cohort, registration, apiKey, code) {
  if (!registration.payment_plan) return fullSeat(cohort, apiKey, code)

  return planDeposit(cohort, apiKey, code)
}
