import { cohortStats } from '@/lib/cohort/controllers'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { listOpenCohorts } from './listOpenCohorts'
import { isPortalVisible } from './isPortalVisible'
import { orderCohortCards } from './orderCohortCards'
import { toCohortCard } from './toCohortCard'
import { todayIso } from './todayIso'

// Open cohorts for the portal as display-ready cards (seats + live Stripe
// pricing): live cohorts first, then recent sold-outs as "Sold out".
export async function cohortCardData(code) {
  const today = todayIso()
  const cohorts = await listOpenCohorts()
  const stats = await cohortStats()
  const apiKey = stripeApiKey()
  const filledSeats = (c) => (stats[c.id] || { filled: 0 }).filled
  const visible = (c) => isPortalVisible(c, filledSeats(c), today)
  const shown = cohorts.filter(visible)
  const cards = await Promise.all(shown.map(
    (cohort) => toCohortCard(cohort, stats, apiKey, today, code)
  ))

  return orderCohortCards(cards)
}
