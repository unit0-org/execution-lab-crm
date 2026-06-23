import { retrievePrice } from '@/lib/stripe/retrievePrice'
import { retrievePromoDiscount } from '@/lib/stripe/retrievePromoDiscount'
import { rewardDiscountCode } from './rewardDiscount'
import { discountedCents } from './discountedCents'

// The price to show: the cohort's regular Stripe price with the active
// reward (20% pre-registration / early-bird) or, failing that, its preset
// promo applied. `regularCents` is the struck full price when discounted.
export async function resolveCohortAmounts(cohort, apiKey, today, inWindow) {
  const price = await retrievePrice(cohort.stripe_price_id, apiKey)
  const code = rewardDiscountCode(cohort, today, inWindow) || cohort.promo_code
  const promo = await retrievePromoDiscount(apiKey, code)
  const net = discountedCents(price.amountCents, promo)

  return {
    amountCents: net,
    currency: price.currency,
    regularCents: net < price.amountCents ? price.amountCents : null
  }
}
