import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { Badge } from '@/ui/atoms/Badge'

export function AttendeeRow({ attendee }) {
  return (
    <Tr>
      <Td>
        <Link href={`/contacts/${attendee.contactId}`}>{attendee.name}</Link>
      </Td>
      <Td>{attendee.email}</Td>
      <Td><Badge tone={attendee.statusTone}>{attendee.status}</Badge></Td>
    </Tr>
  )
}
