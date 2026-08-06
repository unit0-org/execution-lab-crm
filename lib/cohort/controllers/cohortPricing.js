import { resolveCohortAmounts } from './resolveCohortAmounts'
import { rewardKind } from './rewardDiscount'

const shape = (cohort, today, amounts) => ({
  ...amounts,
  rewardKind: rewardKind(cohort, today)
})

const noPrice = {
  amountCents: null, currency: null, regularCents: null,
  discountSource: null, discountCode: null
}

// Today's price for a cohort from Stripe, with the best applicable discount
// (customer code first — see resolveCohortAmounts) and tagged by kind; null
// amount if the lookup fails.
export async function cohortPricing(cohort, apiKey, today, code) {
  try {
    const amounts = await resolveCohortAmounts(cohort, apiKey, today, code)

    return shape(cohort, today, amounts)
  } catch {
    return shape(cohort, today, noPrice)
  }
}
