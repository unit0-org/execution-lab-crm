'use client'

import { Table } from '@/ui/molecules/Table'
import { Text } from '@/ui/atoms/Text'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { CompanyContactRow } from './CompanyContactRow'
import { companyContactColumns } from './companyContactColumns'

export function CompanyContactList({ items, companyId, onChanged }) {
  const cols = companyContactColumns
  const { sorted, sort, toggle } = useTableSort(items, cols, 'name')

  if (!items.length) return <Text tone="muted">No contacts yet.</Text>

  return (
    <Table cols={cols} sort={sort} onSort={toggle}>
      {sorted.map((link) => (
        <CompanyContactRow key={link.id} link={link} companyId={companyId}
          onChanged={onChanged} />
      ))}
    </Table>
  )
}
