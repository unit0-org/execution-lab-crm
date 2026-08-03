import { readinessPromoCode } from '@/lib/stripe/readinessPromoCode'

// The Stripe code for the 20% reward a specific registration earned — only
// one taken before the window opened does. Anchored to registration time, so
// it survives payment retries (an early bird paying late still gets 20%).
export function registrationRewardCode(beforeWindow) {
  if (!beforeWindow) return null

  return readinessPromoCode()
}
