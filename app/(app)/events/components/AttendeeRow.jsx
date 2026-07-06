'use client'

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { Badge } from '@/ui/atoms/Badge'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeAttendeeAction } from '../actions/removeAttendee'

export function AttendeeRow({ attendee, selected, onToggle, onChanged }) {
  const remove = useActionHandler(removeAttendeeAction, { onDone: onChanged })
  const select = { checked: selected, onToggle: () => onToggle(attendee.id) }

  return (
    <Tr select={select} onDelete={() => remove(attendee.id)}
      deleteTitle="Remove attendee">
      <Td>
        <Link href={`/contacts/${attendee.contactId}`}>{attendee.name}</Link>
      </Td>
      <Td>{attendee.email}</Td>
      <Td><Badge tone={attendee.statusTone}>{attendee.status}</Badge></Td>
    </Tr>
  )
}
