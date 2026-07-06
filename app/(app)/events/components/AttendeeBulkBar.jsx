'use client'

import { BulkDeleteBar } from '@/ui/molecules/BulkDeleteBar'
import { useBulkRemoveAttendees } from '../hooks/useBulkRemoveAttendees'

export function AttendeeBulkBar({ selection, onChanged }) {
  const done = () => { selection.clear(); onChanged() }
  const removeMany = useBulkRemoveAttendees(done)

  return (
    <BulkDeleteBar count={selection.ids.size} onCancel={selection.clear}
      onDelete={() => removeMany([...selection.ids])} />
  )
}
