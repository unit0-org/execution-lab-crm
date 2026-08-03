import { Registration } from '@/lib/registration/models'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { normalizeEmail } from '@/lib/registration/models/normalizeEmail'

const paidSeat = (cohortId, email) => Registration.findOne({
  where: { cohort_id: cohortId, email: normalizeEmail(email), status: 'paid' }
})

// Why this seat can't be reserved, in the operator's words — or null when
// it can. A full cohort must never be overfilled by a reservation, and
// someone who has already paid has a seat, so reserving them one would
// take a second.
export async function reservationBlocker(cohort, email) {
  if (await cohortIsFull(cohort)) {
    return 'This cohort is full — there is no seat to reserve.'
  }

  if (await paidSeat(cohort.id, email)) {
    return 'They have already paid for a seat on this cohort.'
  }

  return null
}
