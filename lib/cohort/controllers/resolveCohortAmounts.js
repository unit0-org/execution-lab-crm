import { retrievePrice } from '@/lib/stripe/retrievePrice'
import { retrievePromoDiscount } from '@/lib/stripe/retrievePromoDiscount'
import { rewardDiscountCode } from './rewardDiscount'
import { effectiveDiscount } from './effectiveDiscountCode'
import { discountedCents } from './discountedCents'

// The price to show, applying one discount by the same precedence as
// checkout (`effectiveDiscount`). `regularCents` is the struck full price
// when discounted, and `discountSource`/`discountCode` record which discount
// actually earned the saving — only when it moved the price.
export async function resolveCohortAmounts(
  cohort, apiKey, today, customerCode
) {
  const price = await retrievePrice(cohort.stripe_price_id, apiKey)

  const discount = effectiveDiscount({
    customerCode,
    rewardCode: rewardDiscountCode(cohort, today),
    presetCode: cohort.promo_code
  })
  const promo = await retrievePromoDiscount(apiKey, discount.code)
  const net = discountedCents(price.amountCents, promo)
  const applied = net < price.amountCents

  return {
    amountCents: net,
    currency: price.currency,
    regularCents: applied ? price.amountCents : null,
    discountSource: applied ? discount.source : null,
    discountCode: applied ? discount.code : null
  }
}
