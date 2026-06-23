import { cohortStateKey } from './cohortStateKey'
import { STATE_META } from './cohortStateMeta'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

// A cohort offers a waitlist unless its registration window has closed —
// the same rule that shows the "or join the waitlist" link on its card.
const isJoinable = (card) => STATE_META[cohortStateKey(card)].kind !== 'closed'

function cohortLabel(card) {
  const when = cohortMonthYear(card.start_date)

  return `${when.month} ${when.year}`
}

// Cohorts you can join the waitlist for, as chip options { value, label }:
// every upcoming one (pre-registration, open, or sold out), not just closed.
export function waitlistOptions(cards) {
  return cards
    .filter(isJoinable)
    .map((card) => ({ value: card.slug, label: cohortLabel(card) }))
}
