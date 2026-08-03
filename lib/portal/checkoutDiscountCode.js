import {
  opensOn, registrationRewardCode, effectiveDiscountCode
} from '@/lib/cohort/controllers'
import { validPromotionCode } from '@/lib/stripe/validPromotionCode'
import { isoDate } from './isoDate'

// The single promo code for this registration's checkout, by precedence: a
// valid code they typed (a member rate) replaces the earned 20% reward,
// which replaces the cohort preset. Never stacked.
export async function checkoutDiscountCode(cohort, reg, apiKey) {
  const beforeWindow = isoDate(reg.created_at) < opensOn(cohort)
  const rewardCode = registrationRewardCode(beforeWindow)
  const customerCode = await validPromotionCode(apiKey, reg.promo_code)

  return effectiveDiscountCode({
    customerCode, rewardCode, presetCode: cohort.promo_code
  })
}
