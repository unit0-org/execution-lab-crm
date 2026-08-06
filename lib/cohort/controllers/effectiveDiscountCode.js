// The single discount to apply, by precedence: a code the customer typed
// (e.g. a member rate) replaces the earned 20% reward, which in turn
// replaces the cohort's preset promo. Never stacked. `source` names which
// one won, so the portal can say *why* a price is lower instead of
// crediting every discount to the early-bird reward.
export function effectiveDiscount(codes) {
  const { customerCode, rewardCode, presetCode } = codes

  if (customerCode) return { source: 'coupon', code: customerCode }

  if (rewardCode) return { source: 'earlybird', code: rewardCode }

  if (presetCode) return { source: 'launch', code: presetCode }

  return { source: null, code: null }
}

// Just the code, for callers that only hand it to Stripe.
export const effectiveDiscountCode = (codes) => effectiveDiscount(codes).code
