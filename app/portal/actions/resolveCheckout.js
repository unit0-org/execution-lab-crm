import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { hasValidInvite } from './hasValidInvite'
import { claimedReservationId } from './claimedReservationId'
import { formToRegistration } from './formToRegistration'

// Resolve the open cohort and validated form for a checkout attempt, or an
// early result (error / waitlist). Either claim — a waitlist invite (3.2)
// or a seat reserved for them — skips the full-cohort diversion, because
// the seat being counted as taken is their own. A reservation also carries
// its id into the data, so completing the form lands back on that very row
// instead of taking a second seat.
export async function resolveCheckout(cohortId, formData) {
  const cohort = await openCohort(cohortId)

  if (!cohort) return { error: 'This cohort is not open.' }

  const invited = await hasValidInvite(cohort.id, formData)
  const reserved = await claimedReservationId(cohort.id, formData)

  if (!invited && !reserved && await cohortIsFull(cohort)) {
    return { waitlist: true }
  }

  const data = formToRegistration(formData)

  if (!data) return { error: 'Please complete all required fields.' }

  return { cohort, data: reserved ? { ...data, id: reserved } : data }
}
