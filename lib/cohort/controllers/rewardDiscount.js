import { registrationPhase } from './registrationWindow'
import { readinessPromoCode } from '@/lib/stripe/readinessPromoCode'

// Whether the 20% early-bird reward applies: only before the registration
// window opens. Once it opens the cohort sells at its regular price, however
// many seats are left — there is no in-window allowance.
export function rewardKind(cohort, today) {
  if (registrationPhase(cohort, today) === 'waitlist') return 'earlybird'

  return null
}

// The Stripe promotion code for the reward when one applies, else null.
export function rewardDiscountCode(cohort, today) {
  if (!rewardKind(cohort, today)) return null

  return readinessPromoCode()
}
