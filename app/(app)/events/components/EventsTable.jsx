'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { usePagination } from '@/ui/molecules/usePagination'
import { Pagination } from '@/ui/molecules/Pagination'
import { rowColumns } from '@/ui/molecules/rowColumns'
import { EventRow } from './EventRow'
import { columns } from './eventColumns'

export function EventsTable({ events, selection, onChanged }) {
  const cols = rowColumns(columns, { selection })
  const { sorted, sort, toggle } = useTableSort(events, cols, 'date', 'desc')
  const { paged, page, pageCount, setPage } = usePagination(sorted)

  return (
    <>
      <Table cols={cols} sort={sort} onSort={toggle}>
        {paged.map((event) => (
          <EventRow key={event.id} event={event} onChanged={onChanged}
            selected={selection.ids.has(event.id)}
            onToggle={selection.toggle} />
        ))}
      </Table>
      <Pagination page={page} pageCount={pageCount} onPage={setPage} />
    </>
  )
}
