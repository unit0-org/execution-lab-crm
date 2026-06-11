import { portalOrganizationId } from '@/lib/portal/portalOrganizationId'
import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { cohortCard } from '@/lib/portal/cohortCard'
import { todayIso } from '@/lib/portal/todayIso'
import { registrationPhase } from '@/lib/cohort/controllers'
import { resolveInvite } from './resolveInvite'
import { RegisterClosed } from '../../components/RegisterClosed'
import { RegisterFull } from '../../components/RegisterFull'
import { RegisterView } from '../../components/RegisterView'

// Load one open cohort; a valid invite skips the full check + prefills.
export async function RegisterServer({ params, searchParams }) {
  const { cohortId } = await params
  const orgId = portalOrganizationId()
  const cohort = await openCohort(orgId, cohortId)

  if (!cohort) return <RegisterClosed />

  const invite = await resolveInvite(orgId, cohortId, searchParams)
  const open = registrationPhase(cohort, todayIso()) === 'register'

  if (!invite && !open) return <RegisterClosed />

  if (!invite && await cohortIsFull(orgId, cohort)) return <RegisterFull />

  const card = await cohortCard(orgId, cohort)

  return <RegisterView card={card} invite={invite} />
}
