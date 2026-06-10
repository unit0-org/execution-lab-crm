import { portalOrganizationId } from '@/lib/portal/portalOrganizationId'
import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { formToRegistration } from './formToRegistration'

// Resolve the org, open cohort and validated form for a checkout attempt,
// or an early result (error / waitlist) the action returns verbatim.
export async function resolveCheckout(cohortId, formData) {
  const organizationId = portalOrganizationId()

  if (!organizationId) return { error: 'Registration is unavailable.' }

  const cohort = await openCohort(organizationId, cohortId)

  if (!cohort) return { error: 'This cohort is not open.' }

  if (await cohortIsFull(organizationId, cohort)) return { waitlist: true }

  const data = formToRegistration(formData)

  if (!data) return { error: 'Please complete all required fields.' }

  return { organizationId, cohort, data }
}
