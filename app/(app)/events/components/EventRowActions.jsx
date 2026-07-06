'use client'

import { Inline } from '@/ui/layout/Inline'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { RowUpload } from './RowUpload'
import { EditEvent } from './EditEvent'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { deleteEventAction } from '../actions/deleteEvent'

export function EventRowActions({ event, onChanged }) {
  const remove = useActionHandler(deleteEventAction, { onDone: onChanged })

  return (
    <Inline gap="sm" nowrap>
      <EditEvent event={event} onSaved={onChanged} />
      <RowUpload eventId={event.id} onUpdated={onChanged} />
      <RowDelete onConfirm={() => remove(event.id)} />
    </Inline>
  )
}
