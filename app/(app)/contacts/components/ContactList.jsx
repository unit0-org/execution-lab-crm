'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { ContactRow } from './ContactRow'
import { columns } from './contactColumns'

export function ContactList({ contacts, onChanged }) {
  const { sorted, sort, toggle } = useTableSort(contacts, columns, 'name')

  return (
    <Table cols={columns} sort={sort} onSort={toggle}>
      {sorted.map((c) => (
        <ContactRow key={c.id} contact={c} onChanged={onChanged} />
      ))}
    </Table>
  )
}
