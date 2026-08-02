'use client'

import { MultiSelect } from '@/ui/molecules/MultiSelect'
import { PARTICIPATION_STATUSES }
  from '@/lib/event/controllers/participationStatuses'

// Narrows the list to people who took part in events: any of the chosen
// attendance statuses, in any of the chosen events. Either dropdown may
// be left empty — an empty one simply doesn't narrow anything.
export function ParticipationFilter({ participation, eventOptions }) {
  return (
    <>
      <MultiSelect options={PARTICIPATION_STATUSES}
        selected={participation.statuses} placeholder="Any status"
        onToggle={participation.toggleStatus} />
      <MultiSelect options={eventOptions} selected={participation.events}
        placeholder="Any event" onToggle={participation.toggleEvent} />
    </>
  )
}
