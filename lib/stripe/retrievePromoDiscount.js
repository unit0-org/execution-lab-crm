import { stripe } from './client'
import { couponForPromoCode } from './couponForPromoCode'

// The discount behind a cohort's promo code as { percentOff, amountOff };
// null when no coupon resolves.
export async function retrievePromoDiscount(apiKey, code) {
  if (!code) return null

  try {
    const coupon = await couponForPromoCode(stripe(apiKey), code)

    if (!coupon) return null

    return { percentOff: coupon.percent_off, amountOff: coupon.amount_off }
  } catch {
    return null
  }
}
