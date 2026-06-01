import { Table } from '@/ui/molecules/Table'
import { EventRow } from './EventRow'

const COLS = ['Event', 'Date', 'Type', 'Checked in / Registered', '']

export function EventsTable({ events, onChanged }) {
  return (
    <Table cols={COLS}>
      {events.map((event) => (
        <EventRow key={event.id} event={event} onChanged={onChanged} />
      ))}
    </Table>
  )
}
