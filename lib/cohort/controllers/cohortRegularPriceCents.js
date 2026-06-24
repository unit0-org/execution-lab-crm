import { Cohort } from '../models/Cohort'
import { retrievePrice } from '@/lib/stripe/retrievePrice'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'

// The cohort's full Stripe list price in cents (no discounts), or null
// when it has no price configured — used to prefill a manual invoice.
export async function cohortRegularPriceCents(cohortId) {
  const cohort = await Cohort.findByPk(cohortId)

  if (!cohort || !cohort.stripe_price_id) return null

  const price = await retrievePrice(cohort.stripe_price_id, stripeApiKey())

  return price.amountCents
}
