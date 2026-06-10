import { retrievePrice } from '@/lib/stripe/retrievePrice'
import { activePriceId, isEarlyBird } from './activePriceId'

const result = (cohort, today, price) => ({
  amountCents: price.amountCents,
  currency: price.currency,
  earlyBird: isEarlyBird(cohort, today),
  earlyBirdDeadline: cohort.early_bird_deadline
})

const noPrice = { amountCents: null, currency: null }

// Today's price for a cohort from Stripe; null amount if lookup fails.
export async function cohortPricing(cohort, apiKey, today) {
  try {
    const price = await retrievePrice(activePriceId(cohort, today), apiKey)

    return result(cohort, today, price)
  } catch {
    return result(cohort, today, noPrice)
  }
}
