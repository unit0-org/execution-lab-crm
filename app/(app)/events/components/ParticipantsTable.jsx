'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { usePagination } from '@/ui/molecules/usePagination'
import { Pagination } from '@/ui/molecules/Pagination'
import { rowColumns } from '@/ui/molecules/rowColumns'
import { ParticipantRow } from './ParticipantRow'
import { columns } from './participantColumns'

export function ParticipantsTable({ participants, selection }) {
  const cols = rowColumns(columns, { selection })
  const { sorted, sort, toggle } = useTableSort(participants, cols, 'name')
  const { paged, page, pageCount, setPage } = usePagination(sorted)

  return (
    <>
      <Table cols={cols} sort={sort} onSort={toggle}>
        {paged.map((p) => (
          <ParticipantRow key={p.id} participant={p}
            selected={selection.ids.has(p.id)} onToggle={selection.toggle} />
        ))}
      </Table>
      <Pagination page={page} pageCount={pageCount} onPage={setPage} />
    </>
  )
}
