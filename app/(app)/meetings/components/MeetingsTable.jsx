'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { MeetingRow } from './MeetingRow'
import { columns } from './meetingColumns'

export function MeetingsTable({ meetings }) {
  const { sorted, sort, toggle } =
    useTableSort(meetings, columns, 'date', 'desc')

  return (
    <Table cols={columns} sort={sort} onSort={toggle}>
      {sorted.map((meeting) => (
        <MeetingRow key={meeting.id} meeting={meeting} />
      ))}
    </Table>
  )
}
