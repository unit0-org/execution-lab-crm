import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { DateText } from '@/ui/atoms/DateText'
import { EventRowActions } from './EventRowActions'

export function EventRow({ event, onChanged }) {
  const type = event.type || '—'

  return (
    <Tr>
      <Td truncate>
        <Link href={`/events/${event.id}`}>{event.title}</Link>
      </Td>
      <Td><DateText value={event.date} /></Td>
      <Td>{type}</Td>
      <Td>{event.checked_in}/{event.registered}</Td>
      <Td><EventRowActions event={event} onChanged={onChanged} /></Td>
    </Tr>
  )
}
