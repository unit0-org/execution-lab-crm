import { stripe } from './client'

// The active coupon discount behind a customer-facing promo code (e.g.
// "COHORT01"), as { percentOff, amountOff }, or null when it doesn't
// resolve — so display falls back to the undiscounted price.
export async function retrievePromoDiscount(apiKey, code) {
  if (!code) return null

  try {
    const list = await stripe(apiKey).promotionCodes.list({
      code, active: true, limit: 1
    })
    const coupon = list.data[0]?.coupon

    if (!coupon) return null

    return { percentOff: coupon.percent_off, amountOff: coupon.amount_off }
  } catch {
    return null
  }
}
