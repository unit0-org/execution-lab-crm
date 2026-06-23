import { registrationPhase } from './registrationWindow'
import { readinessPromoCode } from '@/lib/stripe/readinessPromoCode'

// Seats during the window that still earn the early-bird reward.
const EARLY_BIRD_SEATS = 2

// Which 20% reward (if any) applies: 'prereg' before the window opens,
// 'earlybird' for the first 2 in-window seats, else none.
export function rewardKind(cohort, today, inWindowFilled) {
  const phase = registrationPhase(cohort, today)

  if (phase === 'waitlist') return 'prereg'

  if (phase === 'register' && inWindowFilled < EARLY_BIRD_SEATS) {
    return 'earlybird'
  }

  return null
}

// The Stripe promotion code for the reward when one applies, else null.
export function rewardDiscountCode(cohort, today, inWindowFilled) {
  if (!rewardKind(cohort, today, inWindowFilled)) return null

  return readinessPromoCode()
}
