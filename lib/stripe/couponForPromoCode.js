// The coupon object behind a promotion code string, expanded so its
// amounts are present; retrieves by id if Stripe returns a bare id.
export async function couponForPromoCode(client, code) {
  const list = await client.promotionCodes.list({
    code, active: true, limit: 1, expand: ['data.promotion.coupon']
  })
  const coupon = list.data[0]?.promotion?.coupon

  if (coupon && typeof coupon === 'object') return coupon

  if (typeof coupon === 'string') {
    return client.coupons.retrieve(coupon).catch(() => null)
  }

  return null
}
