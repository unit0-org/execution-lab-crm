import { resolvePromotionCode } from './resolvePromotionCode'

// The code itself when it matches a live Stripe promotion code, else null —
// so a customer's typo cleanly falls back to the default 20% reward instead
// of dropping every discount.
export async function validPromotionCode(apiKey, code) {
  if (!code) return null

  const id = await resolvePromotionCode(apiKey, code)

  return id ? code : null
}
