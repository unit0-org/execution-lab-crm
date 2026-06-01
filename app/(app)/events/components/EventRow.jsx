'use client'

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Inline } from '@/ui/layout/Inline'
import { DateText } from '@/ui/atoms/DateText'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { RowUpload } from './RowUpload'
import { useDeleteEvent } from '../hooks/useDeleteEvent'

export function EventRow({ event, onChanged }) {
  const remove = useDeleteEvent(event.id, onChanged)

  return (
    <Tr>
      <Td>{event.title}</Td>
      <Td><DateText value={event.date} /></Td>
      <Td>{event.attendees}</Td>
      <Td>
        <Inline gap="sm">
          <RowUpload eventId={event.id} onUpdated={onChanged} />
          <RowDelete onConfirm={remove} />
        </Inline>
      </Td>
    </Tr>
  )
}
