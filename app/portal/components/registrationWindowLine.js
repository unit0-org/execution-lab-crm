import { dateRangeLabel } from '@/lib/portal/dateRangeLabel'

// "Registration Jun 7 – Jun 12, 2026" for a card, or null for a cohort
// with no scheduled dates yet (nothing to announce).
export function registrationWindowLine(card) {
  if (!card.start_date) return null

  return `Registration ${dateRangeLabel(card.opensAt, card.closesAt)}`
}
