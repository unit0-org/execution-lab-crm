import { portalOrganizationId } from '@/lib/portal/portalOrganizationId'
import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { hasValidInvite } from './hasValidInvite'
import { formToRegistration } from './formToRegistration'

// Resolve the org, open cohort and validated form for a checkout attempt,
// or an early result (error / waitlist). A valid invite skips the
// full-cohort diversion so its holder can claim the freed seat (3.2).
export async function resolveCheckout(cohortId, formData) {
  const orgId = portalOrganizationId()

  if (!orgId) return { error: 'Registration is unavailable.' }

  const cohort = await openCohort(orgId, cohortId)

  if (!cohort) return { error: 'This cohort is not open.' }

  const invited = await hasValidInvite(orgId, cohort.id, formData)

  if (!invited && await cohortIsFull(orgId, cohort)) return { waitlist: true }

  const data = formToRegistration(formData)

  if (!data) return { error: 'Please complete all required fields.' }

  return { organizationId: orgId, cohort, data }
}
