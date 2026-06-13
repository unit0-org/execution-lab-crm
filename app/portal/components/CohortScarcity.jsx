import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { spotsLabel } from './spotsLabel'
import { lowSeatsLabel } from './lowSeatsLabel'

// Seat scarcity for a cohort: a red line when only a few seats remain, a
// quiet status line for the rest, and nothing when seats are plentiful.
export function CohortScarcity({ card, tone, size = 12 }) {
  const low = lowSeatsLabel(card)

  if (low) return <MonoLabel tone="danger" size={size} caps>{low}</MonoLabel>

  const status = spotsLabel(card)

  if (!status) return null

  return <MonoLabel tone={tone} size={size} caps>{status}</MonoLabel>
}
