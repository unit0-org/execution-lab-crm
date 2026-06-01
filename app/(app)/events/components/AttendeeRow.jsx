import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Badge } from '@/ui/atoms/Badge'

export function AttendeeRow({ attendee }) {
  return (
    <Tr>
      <Td>{attendee.name}</Td>
      <Td>{attendee.email}</Td>
      <Td><Badge>{attendee.status}</Badge></Td>
    </Tr>
  )
}
