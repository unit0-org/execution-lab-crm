'use client'

import { Table } from '@/ui/molecules/Table'
import { Text } from '@/ui/atoms/Text'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { CompanyInvoiceRow } from './CompanyInvoiceRow'
import { companyInvoiceColumns } from './companyInvoiceColumns'

export function CompanyInvoiceList({ items }) {
  const cols = companyInvoiceColumns
  const { sorted, sort, toggle } = useTableSort(items, cols, 'date', 'desc')

  if (!items.length) return <Text tone="muted">No invoices yet.</Text>

  return (
    <Table cols={cols} sort={sort} onSort={toggle}>
      {sorted.map((invoice) => (
        <CompanyInvoiceRow key={invoice.id} invoice={invoice} />
      ))}
    </Table>
  )
}
