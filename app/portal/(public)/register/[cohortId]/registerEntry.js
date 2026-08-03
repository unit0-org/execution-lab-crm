import { resolveInvite } from './resolveInvite'
import { resolveReservation } from './resolveReservation'
import { validCoupon } from '@/lib/portal/validCoupon'

// What a register URL carries, resolved together: a waitlist ?invite=
// claim, a staff ?reservation= claim, and a valid Stripe ?code= coupon
// (each null when absent or invalid). Both claims say the same thing to
// this screen — this person already holds a seat — but they come from
// different places and only the invite converts a waitlist entry.
export async function registerEntry(cohortId, searchParams) {
  const params = await searchParams

  return {
    invite: await resolveInvite(cohortId, searchParams),
    reservation: await resolveReservation(cohortId, searchParams),
    coupon: await validCoupon(params.code)
  }
}
