'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { usePagination } from '@/ui/molecules/usePagination'
import { Pagination } from '@/ui/molecules/Pagination'
import { EventRow } from './EventRow'
import { columns } from './eventColumns'

export function EventsTable({ events, onChanged }) {
  const { sorted, sort, toggle } =
    useTableSort(events, columns, 'date', 'desc')
  const { paged, page, pageCount, setPage } = usePagination(sorted)

  return (
    <>
      <Table cols={columns} sort={sort} onSort={toggle}>
        {paged.map((event) => (
          <EventRow key={event.id} event={event} onChanged={onChanged} />
        ))}
      </Table>
      <Pagination page={page} pageCount={pageCount} onPage={setPage} />
    </>
  )
}
