'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { EventRow } from './EventRow'
import { columns } from './eventColumns'

export function EventsTable({ events, onChanged }) {
  const { sorted, sort, toggle } =
    useTableSort(events, columns, 'date', 'desc')

  return (
    <Table cols={columns} sort={sort} onSort={toggle}>
      {sorted.map((event) => (
        <EventRow key={event.id} event={event} onChanged={onChanged} />
      ))}
    </Table>
  )
}
