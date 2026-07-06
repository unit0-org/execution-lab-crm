'use client'

import { Inline } from '@/ui/layout/Inline'
import { ToggleBadge } from '@/ui/atoms/ToggleBadge'
import { STATUS_LABELS } from '@/lib/event/controllers/statusStates'

const OPTIONS = ['All', ...STATUS_LABELS]

const toneFor = (active, label) => (active === label ? 'accent' : 'neutral')

export function AttendeeFilter({ active, onPick, count }) {
  return (
    <Inline gap="sm">
      {OPTIONS.map((label) => (
        <ToggleBadge key={label} tone={toneFor(active, label)}
          onClick={() => onPick(label)} label={label}>
          {label} {count(label)}
        </ToggleBadge>
      ))}
    </Inline>
  )
}
