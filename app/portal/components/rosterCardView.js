import { cohortState } from './cohortState'
import { spotsLabel } from './spotsLabel'
import { stateTone } from './stateTone'
import { startLine } from './startLine'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'
import { formatDollars } from '@/lib/portal/formatDollars'

// Everything a RosterCard renders, derived from a cohort card.
export function rosterCardView(card) {
  const action = cohortState(card)
  const when = cohortMonthYear(card.start_date)
  const regular = card.pricing.regularCents

  return {
    action,
    month: when.month,
    start: startLine(card, when),
    price: formatDollars(card.pricing.amountCents),
    regular: regular ? formatDollars(regular) : null,
    spots: spotsLabel(card),
    tone: stateTone(action.state)
  }
}
