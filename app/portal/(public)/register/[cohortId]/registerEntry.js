import { resolveInvite } from './resolveInvite'
import { validCoupon } from '@/lib/portal/validCoupon'

// What a register URL carries, resolved together: a waitlist ?invite= claim
// and a valid Stripe ?code= coupon (each null when absent or invalid).
export async function registerEntry(cohortId, searchParams) {
  const params = await searchParams

  return {
    invite: await resolveInvite(cohortId, searchParams),
    coupon: await validCoupon(params.code)
  }
}
