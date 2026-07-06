'use client'

import { BulkDeleteBar } from '@/ui/molecules/BulkDeleteBar'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { bulkRemoveAttendeesAction } from '../actions/bulkRemoveAttendees'

export function AttendeeBulkBar({ selection, onChanged }) {
  const done = () => { selection.clear(); onChanged() }
  const removeMany = useActionHandler(bulkRemoveAttendeesAction, {
    onDone: done
  })

  return (
    <BulkDeleteBar count={selection.ids.size} onCancel={selection.clear}
      onDelete={() => removeMany([...selection.ids])} />
  )
}
