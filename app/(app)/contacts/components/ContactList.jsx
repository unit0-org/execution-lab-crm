'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { usePagination } from '@/ui/molecules/usePagination'
import { Pagination } from '@/ui/molecules/Pagination'
import { ContactRow } from './ContactRow'
import { useContactColumns } from '../hooks/useContactColumns'

export function ContactList({ contacts, selection, onChanged }) {
  const cols = useContactColumns(selection)
  const { sorted, sort, toggle } = useTableSort(contacts, cols, 'name')
  const p = usePagination(sorted)

  return (
    <>
      <Table cols={cols} sort={sort} onSort={toggle}>
        {p.paged.map((c) => (
          <ContactRow key={c.id} contact={c}
            selected={selection.ids.has(c.id)}
            onToggle={selection.toggle} onChanged={onChanged} />
        ))}
      </Table>
      <Pagination page={p.page} pageCount={p.pageCount} onPage={p.setPage}
        perPage={p.perPage} onPerPage={p.setPerPage} />
    </>
  )
}
