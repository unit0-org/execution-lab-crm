import { validPromotionCode } from '@/lib/stripe/validPromotionCode'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'

// The coupon from a portal URL's ?code= when it's a live Stripe promotion
// code, else null — so an unknown or absent code is simply ignored.
export function validCoupon(code) {
  if (!code) return null

  return validPromotionCode(stripeApiKey(), code)
}
