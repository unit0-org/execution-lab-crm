import { cohortStateKey } from './cohortStateKey'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

// The waitlist is a pre-launch priority list: you can join for an upcoming
// cohort (pre-registration or open), but not once it's sold out or closed.
const NOT_JOINABLE = new Set(['full', 'closed'])

function cohortLabel(card) {
  const when = cohortMonthYear(card.start_date)

  return `${when.month} ${when.year}`
}

// Cohorts you can join the waitlist for, as chip options { value, label }.
export function waitlistOptions(cards) {
  return cards
    .filter((card) => !NOT_JOINABLE.has(cohortStateKey(card)))
    .map((card) => ({ value: card.slug, label: cohortLabel(card) }))
}
