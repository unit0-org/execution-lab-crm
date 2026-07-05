import { dateRangeLabel } from '@/lib/portal/dateRangeLabel'

// "Registration Jun 7 – Jun 12, 2026" for a card. Hidden when there are no
// scheduled dates, the cohort has sold out, or registration has already
// closed — the window is no longer actionable.
export function registrationWindowLine(card) {
  const soldOut = card.spotsLeft <= 0
  const past = card.phase === 'closed'

  if (!card.start_date || soldOut || past) return null

  return `Registration ${dateRangeLabel(card.opensAt, card.closesAt)}`
}
