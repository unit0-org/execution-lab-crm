'use client'

import { Badge } from '@/ui/atoms/Badge'
import { reasonLabel } from '../hooks/reasonLabel'

// Every reason one group was flagged for. A pair that matches on name *and*
// phone wears both badges, instead of being listed as two separate cards
// the user has to act on twice.
export function ReasonBadges({ reasons }) {
  return (
    <>
      {reasons.map((reason) => (
        <Badge key={reason} tone="accent">{reasonLabel(reason)}</Badge>
      ))}
    </>
  )
}
