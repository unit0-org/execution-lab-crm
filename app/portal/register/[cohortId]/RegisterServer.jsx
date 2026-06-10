import { portalOrganizationId } from '@/lib/portal/portalOrganizationId'
import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { cohortPricing } from '@/lib/cohort/controllers'
import { orgStripeKey } from '@/lib/purchase/controllers/orgStripeKey'
import { todayIso } from '@/lib/portal/todayIso'
import { RegisterClosed } from '../../components/RegisterClosed'
import { RegisterFull } from '../../components/RegisterFull'
import { RegisterView } from '../../components/RegisterView'

// Server-side load of one open cohort for the public register screen.
export async function RegisterServer({ params }) {
  const { cohortId } = await params
  const orgId = portalOrganizationId()
  const cohort = await openCohort(orgId, cohortId)

  if (!cohort) return <RegisterClosed />

  if (await cohortIsFull(orgId, cohort)) return <RegisterFull />

  const apiKey = await orgStripeKey(orgId)
  const pricing = await cohortPricing(cohort, apiKey, todayIso())

  return <RegisterView cohort={cohort} pricing={pricing} />
}
