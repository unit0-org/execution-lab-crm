import { Registration } from '../../registration/models'
import { attachPaidCharges }
  from '@/lib/registration/controllers/attachPaidCharges'
import { tallyByCohort } from './tallyByCohort'

// Per-cohort filled head count and revenue (cents). "Filled" counts every
// confirmed (seat-holding) registration via the model scope; revenue is
// DERIVED from the real Stripe charges (the registration→purchase
// reconciliation), never a stored amount, so it can't drift from the money
// that actually lives in `purchase`.
export async function cohortStats() {
  const rows = await Registration.scope('confirmed').findAll()
  const seats = await attachPaidCharges(rows.map((r) => r.toJSON()))

  return tallyByCohort(seats)
}
