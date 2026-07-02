import { cohortStats } from '@/lib/cohort/controllers'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { listOpenCohorts } from './listOpenCohorts'
import { isPortalVisible } from './isPortalVisible'
import { toCohortCard } from './toCohortCard'
import { todayIso } from './todayIso'

// Open cohorts for the portal as display-ready cards (seats + live Stripe
// pricing), in chronological order (soonest start first, as they arrive);
// recent sold-outs stay in place, showing "Sold out".
export async function cohortCardData(code) {
  const today = todayIso()
  const cohorts = await listOpenCohorts()
  const stats = await cohortStats()
  const apiKey = stripeApiKey()
  const filledSeats = (c) => (stats[c.id] || { filled: 0 }).filled
  const visible = (c) => isPortalVisible(c, filledSeats(c), today)
  const shown = cohorts.filter(visible)

  return Promise.all(shown.map(
    (cohort) => toCohortCard(cohort, stats, apiKey, today, code)
  ))
}
