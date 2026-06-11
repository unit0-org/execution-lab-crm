import { cohortStateKey } from './cohortStateKey'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

const JOINABLE = new Set(['waitlist', 'full'])

function cohortLabel(card) {
  const when = cohortMonthYear(card.start_date)

  return `${when.month} ${when.year}`
}

// Cohorts you can join the waitlist for (not yet open, or sold out), as
// chip options { value, label }.
export function waitlistOptions(cards) {
  return cards
    .filter((card) => JOINABLE.has(cohortStateKey(card)))
    .map((card) => ({ value: card.id, label: cohortLabel(card) }))
}
