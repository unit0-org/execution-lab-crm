import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'

export function AttendeeRow({ attendee }) {
  return (
    <Tr>
      <Td>{attendee.name}</Td>
      <Td>{attendee.email}</Td>
    </Tr>
  )
}
