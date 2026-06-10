import { stripe } from './client'

// The amount + currency for a Stripe price id.
export async function retrievePrice(priceId, apiKey) {
  const p = await stripe(apiKey).prices.retrieve(priceId)

  return { amountCents: p.unit_amount, currency: p.currency }
}
