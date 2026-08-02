'use client'

import { BulkDeleteBar } from '@/ui/molecules/BulkDeleteBar'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { bulkRemoveAttendeesAction } from '../actions/bulkRemoveAttendees'

// Removes the chosen participations — the same action the per-event
// attendee list uses, so removal means one thing wherever you do it. The
// contacts themselves are untouched; only their place on an event goes.
export function ParticipantsBulkBar({ selection, onChanged }) {
  const done = () => { selection.clear(); onChanged() }
  const removeMany = useActionHandler(bulkRemoveAttendeesAction, {
    onDone: done
  })

  return (
    <BulkDeleteBar count={selection.ids.size} onCancel={selection.clear}
      onDelete={() => removeMany([...selection.ids])} />
  )
}
