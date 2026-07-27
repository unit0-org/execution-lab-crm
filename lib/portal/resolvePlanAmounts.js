import { retrievePrice } from '@/lib/stripe/retrievePrice'
import { retrievePromoDiscount } from '@/lib/stripe/retrievePromoDiscount'
import { discountedCents } from '@/lib/cohort/controllers/discountedCents'
import { splitInHalf } from './splitInHalf'

// What the plan costs this registrant: the seat's discounted total (the one
// discount, resolved exactly as checkout resolves it) split in half. The
// discount is baked into the deposit rather than left to Stripe, so it
// covers the whole seat instead of only the half paid today.
export async function resolvePlanAmounts(cohort, apiKey, code) {
  const price = await retrievePrice(cohort.stripe_price_id, apiKey)
  const promo = await retrievePromoDiscount(apiKey, code)
  const totalCents = discountedCents(price.amountCents, promo)

  return { ...splitInHalf(totalCents), currency: price.currency }
}
