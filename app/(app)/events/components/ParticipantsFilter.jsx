'use client'

import { Inline } from '@/ui/layout/Inline'
import { MultiSelect } from '@/ui/molecules/MultiSelect'
import { PARTICIPATION_STATUSES }
  from '@/lib/event/controllers/participationStatuses'
import { useUrlListFilter } from '@/app/(app)/hooks/useUrlListFilter'

// Narrows the participations to some attendance statuses, in some events.
// Either dropdown may be left empty — an empty one doesn't narrow.
export function ParticipantsFilter({ picked, eventOptions }) {
  const toggle = useUrlListFilter(picked)

  return (
    <Inline gap="sm">
      <MultiSelect options={PARTICIPATION_STATUSES} placeholder="Any status"
        selected={picked.statuses}
        onToggle={(value) => toggle('statuses', value)} />
      <MultiSelect options={eventOptions} placeholder="Any event"
        selected={picked.events}
        onToggle={(value) => toggle('events', value)} />
    </Inline>
  )
}
