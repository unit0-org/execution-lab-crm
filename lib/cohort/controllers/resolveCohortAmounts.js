import { retrievePrice } from '@/lib/stripe/retrievePrice'
import { retrievePromoDiscount } from '@/lib/stripe/retrievePromoDiscount'
import { activePriceId, isEarlyBird } from './activePriceId'
import { discountedCents } from './discountedCents'

const listAmount = (cohort, today, apiKey, active) => {
  if (!isEarlyBird(cohort, today)) return Promise.resolve(active)

  return retrievePrice(cohort.stripe_price_id, apiKey)
    .then((price) => price.amountCents).catch(() => active)
}

// The price to show after early-bird selection + the cohort's preset
// promo, plus the struck "regular" amount when a discount applies.
export async function resolveCohortAmounts(cohort, apiKey, today) {
  const active = await retrievePrice(activePriceId(cohort, today), apiKey)
  const promo = await retrievePromoDiscount(apiKey, cohort.promo_code)
  const net = discountedCents(active.amountCents, promo)
  const list = await listAmount(cohort, today, apiKey, active.amountCents)

  return {
    amountCents: net,
    currency: active.currency,
    regularCents: net < list ? list : null
  }
}
