'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { rowColumns } from '@/ui/molecules/rowColumns'
import { AttendeeRow } from './AttendeeRow'
import { columns } from './attendeeColumns'

export function AttendeeTable({ attendees, selection, onChanged }) {
  const cols = rowColumns(columns, { selection, deletable: true })
  const { sorted, sort, toggle } = useTableSort(attendees, cols, 'name')

  return (
    <Table cols={cols} sort={sort} onSort={toggle}>
      {sorted.map((a) => (
        <AttendeeRow key={a.id} attendee={a}
          selected={selection.ids.has(a.id)}
          onToggle={selection.toggle} onChanged={onChanged} />
      ))}
    </Table>
  )
}
