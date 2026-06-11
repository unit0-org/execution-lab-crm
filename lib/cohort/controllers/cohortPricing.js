import { resolveCohortAmounts } from './resolveCohortAmounts'
import { isEarlyBird } from './activePriceId'

const shape = (cohort, today, amounts) => ({
  ...amounts,
  discounted: amounts.regularCents !== null,
  earlyBird: isEarlyBird(cohort, today),
  earlyBirdDeadline: cohort.early_bird_deadline
})

const noPrice = { amountCents: null, currency: null, regularCents: null }

// Today's price for a cohort from Stripe — early-bird price + the cohort's
// preset promo coupon applied; null amount if the lookup fails.
export async function cohortPricing(cohort, apiKey, today) {
  try {
    const amounts = await resolveCohortAmounts(cohort, apiKey, today)

    return shape(cohort, today, amounts)
  } catch {
    return shape(cohort, today, noPrice)
  }
}
