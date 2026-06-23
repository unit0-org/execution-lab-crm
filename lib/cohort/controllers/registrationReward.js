import { readinessPromoCode } from '@/lib/stripe/readinessPromoCode'
import { EARLY_BIRD_SEATS } from './rewardDiscount'

// The 20% reward a specific registration earned, by when they signed up:
// 'prereg' if they registered before the window opened, else 'earlybird' for
// the first 2 in-window seats. Anchored to registration time, so it's stable
// across payment retries (a pre-registrant paying late still gets 20%).
export function registrationRewardKind(beforeWindow, priorInWindow) {
  if (beforeWindow) return 'prereg'

  if (priorInWindow < EARLY_BIRD_SEATS) return 'earlybird'

  return null
}

export function registrationRewardCode(beforeWindow, priorInWindow) {
  if (!registrationRewardKind(beforeWindow, priorInWindow)) return null

  return readinessPromoCode()
}
