import { cohortState } from './cohortState'
import { stateTone } from './stateTone'
import { startLine } from './startLine'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'
import { formatDollars } from '@/lib/portal/formatDollars'

// Everything a RosterCard renders, derived from a cohort card.
export function rosterCardView(card) {
  const action = cohortState(card)
  const when = cohortMonthYear(card.start_date)
  const regular = card.pricing.regularCents
  const soldOut = action.state === 'full'

  return {
    action,
    month: when.month,
    start: startLine(card, when),
    price: soldOut ? null : formatDollars(card.pricing.amountCents),
    regular: soldOut || !regular ? null : formatDollars(regular),
    tone: stateTone(action.state)
  }
}
