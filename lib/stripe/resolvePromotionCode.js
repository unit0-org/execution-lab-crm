import { stripe } from './client'

// The Stripe promotion-code id for a customer-facing code (e.g.
// "COHORT01"), or null when it doesn't match an active code — so
// checkout can fall back to the manual promo box instead of breaking.
export async function resolvePromotionCode(apiKey, code) {
  if (!code) return null

  const list = await stripe(apiKey).promotionCodes.list({
    code, active: true, limit: 1
  })

  return list.data[0] ? list.data[0].id : null
}
