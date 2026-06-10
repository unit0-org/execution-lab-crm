import { portalOrganizationId } from '@/lib/portal/portalOrganizationId'
import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { cohortPricing } from '@/lib/cohort/controllers'
import { orgStripeKey } from '@/lib/purchase/controllers/orgStripeKey'
import { todayIso } from '@/lib/portal/todayIso'
import { resolveInvite } from './resolveInvite'
import { RegisterClosed } from '../../components/RegisterClosed'
import { RegisterFull } from '../../components/RegisterFull'
import { RegisterView } from '../../components/RegisterView'

// Server-side load of one open cohort for the public register screen. A
// valid invite skips the full check and prefills the form (Story 3.2).
export async function RegisterServer({ params, searchParams }) {
  const { cohortId } = await params
  const orgId = portalOrganizationId()
  const cohort = await openCohort(orgId, cohortId)

  if (!cohort) return <RegisterClosed />

  const invite = await resolveInvite(orgId, cohortId, searchParams)

  if (!invite && await cohortIsFull(orgId, cohort)) return <RegisterFull />

  const apiKey = await orgStripeKey(orgId)
  const pricing = await cohortPricing(cohort, apiKey, todayIso())

  return <RegisterView cohort={cohort} pricing={pricing} invite={invite} />
}
