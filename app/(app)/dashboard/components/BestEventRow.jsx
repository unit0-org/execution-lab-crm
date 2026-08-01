import { Td } from '@/ui/molecules/Td'
import { Tr } from '@/ui/molecules/Tr'
import { Link } from '@/ui/atoms/Link'

// One ranked event. The title links through so a good rate is one click
// from the attendee list that produced it.
export function BestEventRow({ event }) {
  return (
    <Tr plain>
      <Td truncate>
        <Link href={`/events/${event.id}`}>{event.title}</Link>
      </Td>
      <Td>{event.type}</Td>
      <Td>{`${event.registered} / ${event.attended}`}</Td>
      <Td>{`${event.toClient}%`}</Td>
    </Tr>
  )
}
