'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { ContactRow } from './ContactRow'
import { useContactColumns } from '../hooks/useContactColumns'

export function ContactList({ contacts, selection, onChanged }) {
  const cols = useContactColumns(selection)
  const { sorted, sort, toggle } = useTableSort(contacts, cols, 'name')

  return (
    <Table cols={cols} sort={sort} onSort={toggle}>
      {sorted.map((c) => (
        <ContactRow key={c.id} contact={c}
          selected={selection.ids.has(c.id)}
          onToggle={selection.toggle} onChanged={onChanged} />
      ))}
    </Table>
  )
}
