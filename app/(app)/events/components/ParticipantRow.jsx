'use client'

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { Badge } from '@/ui/atoms/Badge'

// One participation. Both the person and the event link out, because the
// row is the only place they meet.
export function ParticipantRow({ participant, selected, onToggle }) {
  const p = participant
  const select = { checked: selected, onToggle: () => onToggle(p.id) }

  return (
    <Tr select={select}>
      <Td truncate>
        <Link href={`/contacts/${p.contactId}`}>{p.name}</Link>
      </Td>
      <Td truncate>{p.email}</Td>
      <Td truncate>
        <Link href={`/events/${p.eventId}`}>{p.eventTitle}</Link>
      </Td>
      <Td><Badge tone={p.statusTone}>{p.status}</Badge></Td>
    </Tr>
  )
}
