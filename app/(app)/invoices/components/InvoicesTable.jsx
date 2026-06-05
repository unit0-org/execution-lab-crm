'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { InvoiceRow } from './InvoiceRow'
import { columns } from './invoiceColumns'

export function InvoicesTable({ invoices }) {
  const { sorted, sort, toggle } =
    useTableSort(invoices, columns, 'date', 'desc')

  return (
    <Table cols={columns} sort={sort} onSort={toggle}>
      {sorted.map((invoice) => (
        <InvoiceRow key={invoice.id} invoice={invoice} />
      ))}
    </Table>
  )
}
