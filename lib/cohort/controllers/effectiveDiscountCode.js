import { rewardDiscountCode } from './rewardDiscount'

// The single promo code to apply at checkout, by precedence: a code the
// customer typed (e.g. a member rate) replaces the default 20% reward,
// which in turn replaces the cohort's preset promo. Never stacked.
export function effectiveDiscountCode(input) {
  const { cohort, today, inWindowFilled, customerCode } = input

  return customerCode
    || rewardDiscountCode(cohort, today, inWindowFilled)
    || cohort.promo_code
    || null
}
