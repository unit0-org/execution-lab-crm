import { Badge } from '@/ui/atoms/Badge'
import { planBadgeState } from './planBadgeState'

// A seat mid-plan: the deposit is in, the second half is not. Renders
// nothing for a seat paid in full or one whose plan has completed.
export function PlanBadge({ registration }) {
  const state = planBadgeState(registration)

  if (!state) return null

  return <Badge tone={state.tone}>{state.label}</Badge>
}
