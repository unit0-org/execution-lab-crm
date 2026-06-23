// The Stripe promotion code behind the 20% reward (pre-registration and
// first-2-seats early bird). One reusable code, overridable per environment;
// the coupon itself (20% off, once) must exist in Stripe under this code.
const DEFAULT_CODE = 'READY20'

export function readinessPromoCode() {
  return process.env.STRIPE_READINESS_CODE || DEFAULT_CODE
}
