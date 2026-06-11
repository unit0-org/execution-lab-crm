import { retrievePrice } from '@/lib/stripe/retrievePrice'
import { activePriceId, isEarlyBird } from './activePriceId'

const shape = (cohort, today, price, regularCents) => ({
  amountCents: price.amountCents, currency: price.currency, regularCents,
  earlyBird: isEarlyBird(cohort, today),
  earlyBirdDeadline: cohort.early_bird_deadline
})

// The regular amount (for a strikethrough), only while early-bird is on.
function regularCentsOf(cohort, today, apiKey) {
  if (!isEarlyBird(cohort, today)) return Promise.resolve(null)

  return retrievePrice(cohort.stripe_price_id, apiKey)
    .then((p) => p.amountCents).catch(() => null)
}

const noPrice = { amountCents: null, currency: null }

// Today's price for a cohort from Stripe; null amount if lookup fails.
export async function cohortPricing(cohort, apiKey, today) {
  try {
    const price = await retrievePrice(activePriceId(cohort, today), apiKey)
    const regular = await regularCentsOf(cohort, today, apiKey)

    return shape(cohort, today, price, regular)
  } catch {
    return shape(cohort, today, noPrice, null)
  }
}
