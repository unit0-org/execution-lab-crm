import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { DateText } from '@/ui/atoms/DateText'
import { EventRowActions } from './EventRowActions'
import { attendanceLabel } from './attendanceLabel'

export function EventRow({ event, selected, onToggle, onChanged }) {
  const type = event.type || '—'
  const select = { checked: selected, onToggle: () => onToggle(event.id) }

  return (
    <Tr select={select}>
      <Td truncate>
        <Link href={`/events/${event.id}`}>{event.title}</Link>
      </Td>
      <Td><DateText value={event.date} /></Td>
      <Td>{type}</Td>
      <Td>{attendanceLabel(event)}</Td>
      <Td><EventRowActions event={event} onChanged={onChanged} /></Td>
    </Tr>
  )
}
