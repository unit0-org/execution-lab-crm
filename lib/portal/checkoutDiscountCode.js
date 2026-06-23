import {
  opensOn, priorInWindowCount, registrationRewardCode, effectiveDiscountCode
} from '@/lib/cohort/controllers'
import { isoDate } from './isoDate'

async function earnedRewardCode(cohort, reg) {
  const beforeWindow = isoDate(reg.created_at) < opensOn(cohort)
  const prior = beforeWindow ? 0 : await priorInWindowCount(cohort, reg)

  return registrationRewardCode(beforeWindow, prior)
}

// The single promo code to apply for this registration's checkout, by
// precedence: their own code, else the earned 20% reward, else the cohort
// preset. Never stacked.
export async function checkoutDiscountCode(cohort, reg) {
  const rewardCode = await earnedRewardCode(cohort, reg)

  return effectiveDiscountCode({
    customerCode: reg.promo_code,
    rewardCode,
    presetCode: cohort.promo_code
  })
}
