import {
  opensOn, priorInWindowCount, registrationRewardCode, effectiveDiscountCode
} from '@/lib/cohort/controllers'
import { validPromotionCode } from '@/lib/stripe/validPromotionCode'
import { isoDate } from './isoDate'

async function earnedRewardCode(cohort, reg) {
  const beforeWindow = isoDate(reg.created_at) < opensOn(cohort)
  const prior = beforeWindow ? 0 : await priorInWindowCount(cohort, reg)

  return registrationRewardCode(beforeWindow, prior)
}

// The single promo code for this registration's checkout, by precedence: a
// valid code they typed (a member rate) replaces the earned 20% reward,
// which replaces the cohort preset. Never stacked.
export async function checkoutDiscountCode(cohort, reg, apiKey) {
  const rewardCode = await earnedRewardCode(cohort, reg)
  const customerCode = await validPromotionCode(apiKey, reg.promo_code)

  return effectiveDiscountCode({
    customerCode, rewardCode, presetCode: cohort.promo_code
  })
}
