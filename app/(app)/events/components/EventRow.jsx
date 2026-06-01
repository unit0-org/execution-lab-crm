import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'

export function EventRow({ event }) {
  return (
    <Tr>
      <Td>{event.title}</Td>
      <Td><DateText value={event.date} /></Td>
      <Td>{event.attendees}</Td>
    </Tr>
  )
}
