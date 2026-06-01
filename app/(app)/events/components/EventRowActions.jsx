'use client'

import { Inline } from '@/ui/layout/Inline'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { RowUpload } from './RowUpload'
import { EditEvent } from './EditEvent'
import { useDeleteEvent } from '../hooks/useDeleteEvent'

export function EventRowActions({ event, onChanged }) {
  const remove = useDeleteEvent(event.id, onChanged)

  return (
    <Inline gap="sm" nowrap>
      <EditEvent event={event} onSaved={onChanged} />
      <RowUpload eventId={event.id} onUpdated={onChanged} />
      <RowDelete onConfirm={remove} />
    </Inline>
  )
}
