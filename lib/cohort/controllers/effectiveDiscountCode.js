// The single promo code to apply at checkout, by precedence: a code the
// customer typed (e.g. a member rate) replaces the earned 20% reward, which
// in turn replaces the cohort's preset promo. Never stacked.
export function effectiveDiscountCode(codes) {
  const { customerCode, rewardCode, presetCode } = codes

  return customerCode || rewardCode || presetCode || null
}
