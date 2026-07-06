'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { AttendeeRow } from './AttendeeRow'
import { columns } from './attendeeColumns'

export function AttendeeTable({ attendees, onChanged }) {
  const { sorted, sort, toggle } = useTableSort(attendees, columns, 'name')

  return (
    <Table cols={columns} sort={sort} onSort={toggle}>
      {sorted.map((a) => (
        <AttendeeRow key={a.id} attendee={a} onChanged={onChanged} />
      ))}
    </Table>
  )
}
