'use client'

import { Stack } from '@/ui/layout/Stack'
import { useRowSelection } from '@/ui/molecules/useRowSelection'
import { useParticipants } from '../hooks/useParticipants'
import { ParticipantsFilter } from './ParticipantsFilter'
import { ParticipantsBulkBar } from './ParticipantsBulkBar'
import { ParticipantsTable } from './ParticipantsTable'

// Selection spans the whole filtered list rather than the visible page:
// filter to the participations you want gone, select all, remove.
export function ParticipantsView(props) {
  const { picked, initialParticipants, eventOptions } = props
  const { participants, reload } = useParticipants(initialParticipants, picked)
  const selection = useRowSelection(participants)

  return (
    <Stack gap="sm">
      <ParticipantsFilter picked={picked} eventOptions={eventOptions} />
      <ParticipantsBulkBar selection={selection} onChanged={reload} />
      <ParticipantsTable participants={participants} selection={selection} />
    </Stack>
  )
}
