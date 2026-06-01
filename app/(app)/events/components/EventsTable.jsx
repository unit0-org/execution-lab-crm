import { Table } from '@/ui/molecules/Table'
import { EventRow } from './EventRow'

const COLS = ['Event', 'Date', 'Attendees']

export function EventsTable({ events }) {
  return (
    <Table cols={COLS}>
      {events.map((event) => <EventRow key={event.id} event={event} />)}
    </Table>
  )
}
