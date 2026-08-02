'use client'

import { BulkDeleteBar } from '@/ui/molecules/BulkDeleteBar'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { bulkDeleteEventsAction } from '../actions/bulkDeleteEvents'

// Deleting an event takes its participants and their answers with it, so
// the shared confirm step matters more here than on most tables.
export function EventsBulkBar({ selection, onChanged }) {
  const done = () => { selection.clear(); onChanged() }
  const removeMany = useActionHandler(bulkDeleteEventsAction, { onDone: done })

  return (
    <BulkDeleteBar count={selection.ids.size} onCancel={selection.clear}
      onDelete={() => removeMany([...selection.ids])} />
  )
}
