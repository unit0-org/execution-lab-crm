import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { resolvePromotionCode } from '@/lib/stripe/resolvePromotionCode'

// Reject a cohort whose preset promo code doesn't match an active Stripe
// promotion code — otherwise a typo would silently charge full price.
export async function assertPromoCode(data) {
  if (!data.promo_code) return data

  const id = await resolvePromotionCode(stripeApiKey(), data.promo_code)

  if (id) return data

  throw new Error(`Promo code "${data.promo_code}" is not active in Stripe`)
}
