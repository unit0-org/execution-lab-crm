import { Text } from '@/ui/atoms/Text'
import { Table } from '@/ui/molecules/Table'
import { BestEventRow } from './BestEventRow'
import { columns } from './bestEventColumns'
import { TOP_EVENTS } from './topEvents'

export function BestEventsBody({ events }) {
  if (!events.length) {
    return <Text tone="muted">No attended events in this period yet.</Text>
  }

  return (
    <Table cols={columns}>
      {events.slice(0, TOP_EVENTS).map((event) => (
        <BestEventRow key={event.id} event={event} />
      ))}
    </Table>
  )
}
