'use client'

import { ToggleBadge } from '@/ui/atoms/ToggleBadge'

// Toggles whether refunded charges appear in the list.
export function RefundFilter({ showRefunded, onToggle }) {
  const label = showRefunded ? 'Showing refunded' : 'Show refunded'
  const tone = showRefunded ? 'accent' : 'neutral'

  return (
    <ToggleBadge tone={tone} onClick={onToggle} label={label}>
      {label}
    </ToggleBadge>
  )
}
