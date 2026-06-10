// Stripe forbids combining an auto-applied discount with the manual
// promo box, so pick one: a preset code auto-applies; otherwise the
// box stays open for the customer to type their own.
export function checkoutDiscount(promotionCodeId) {
  if (promotionCodeId) {
    return { discounts: [{ promotion_code: promotionCodeId }] }
  }

  return { allow_promotion_codes: true }
}
