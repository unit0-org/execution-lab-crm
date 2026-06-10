import { cohortStats } from '@/lib/cohort/controllers'
import { orgStripeKey } from '@/lib/purchase/controllers/orgStripeKey'
import { listOpenCohorts } from './listOpenCohorts'
import { toCohortCard } from './toCohortCard'
import { todayIso } from './todayIso'

// Open cohorts for the portal org as display-ready cards (seats +
// live Stripe pricing), soonest start first.
export async function cohortCardData(organizationId) {
  const today = todayIso()
  const cohorts = await listOpenCohorts(organizationId)
  const stats = await cohortStats(organizationId)
  const apiKey = await orgStripeKey(organizationId)

  return Promise.all(
    cohorts.map((cohort) => toCohortCard(cohort, stats, apiKey, today))
  )
}
