import { resolveCohortAmounts } from './resolveCohortAmounts'
import { rewardKind } from './rewardDiscount'

const shape = (cohort, today, inWindow, amounts) => ({
  ...amounts,
  discounted: amounts.regularCents !== null,
  rewardKind: rewardKind(cohort, today, inWindow)
})

const noPrice = { amountCents: null, currency: null, regularCents: null }

// Today's price for a cohort from Stripe, with the active reward applied
// and tagged by kind; null amount if the lookup fails.
export async function cohortPricing(cohort, apiKey, today, inWindow) {
  try {
    const amounts = await resolveCohortAmounts(cohort, apiKey, today, inWindow)

    return shape(cohort, today, inWindow, amounts)
  } catch {
    return shape(cohort, today, inWindow, noPrice)
  }
}
