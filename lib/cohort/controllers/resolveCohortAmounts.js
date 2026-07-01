import { retrievePrice } from '@/lib/stripe/retrievePrice'
import { retrievePromoDiscount } from '@/lib/stripe/retrievePromoDiscount'
import { rewardDiscountCode } from './rewardDiscount'
import { discountedCents } from './discountedCents'

// The price to show, applying one discount by the same precedence as
// checkout: a valid customer code (from ?code= / the promo field) first,
// then the active reward (20% pre-registration / early-bird), then the
// cohort preset. `regularCents` is the struck full price when discounted.
export async function resolveCohortAmounts(
  cohort, apiKey, today, inWindow, customerCode
) {
  const price = await retrievePrice(cohort.stripe_price_id, apiKey)
  const reward = rewardDiscountCode(cohort, today, inWindow)
  const code = customerCode || reward || cohort.promo_code
  const promo = await retrievePromoDiscount(apiKey, code)
  const net = discountedCents(price.amountCents, promo)

  return {
    amountCents: net,
    currency: price.currency,
    regularCents: net < price.amountCents ? price.amountCents : null
  }
}
