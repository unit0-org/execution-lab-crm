'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { MeetingRow } from './MeetingRow'
import { useMeetingColumns } from '../hooks/useMeetingColumns'

export function MeetingsTable({ meetings, selection }) {
  const cols = useMeetingColumns(selection)
  const { sorted, sort, toggle } = useTableSort(meetings, cols, 'date', 'desc')

  return (
    <Table cols={cols} sort={sort} onSort={toggle}>
      {sorted.map((meeting) => (
        <MeetingRow key={meeting.id} meeting={meeting}
          selected={selection.ids.has(meeting.id)}
          onToggle={selection.toggle} />
      ))}
    </Table>
  )
}
