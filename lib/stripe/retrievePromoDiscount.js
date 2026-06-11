import { stripe } from './client'

async function couponForCode(client, code) {
  const list = await client.promotionCodes.list({
    code, active: true, limit: 1, expand: ['data.coupon']
  })
  const found = list.data[0]?.coupon

  if (found && typeof found === 'object') return found

  return client.coupons.retrieve(code).catch(() => null)
}

// The coupon behind a cohort's promo code — a promotion code (its coupon,
// expanded so the amounts are present) or a bare coupon id — as
// { percentOff, amountOff }; null when none resolves.
export async function retrievePromoDiscount(apiKey, code) {
  if (!code) return null

  try {
    const coupon = await couponForCode(stripe(apiKey), code)

    if (!coupon) return null

    return { percentOff: coupon.percent_off, amountOff: coupon.amount_off }
  } catch {
    return null
  }
}
