import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { hasValidInvite } from './hasValidInvite'
import { formToRegistration } from './formToRegistration'

// Resolve the open cohort and validated form for a checkout attempt,
// or an early result (error / waitlist). A valid invite skips the
// full-cohort diversion so its holder can claim the freed seat (3.2).
export async function resolveCheckout(cohortId, formData) {
  const cohort = await openCohort(cohortId)

  if (!cohort) return { error: 'This cohort is not open.' }

  const invited = await hasValidInvite(cohort.id, formData)

  if (!invited && await cohortIsFull(cohort)) return { waitlist: true }

  const data = formToRegistration(formData)

  if (!data) return { error: 'Please complete all required fields.' }

  return { cohort, data }
}
