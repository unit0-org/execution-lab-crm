'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { InvoiceRow } from './InvoiceRow'
import { useInvoiceColumns } from '../hooks/useInvoiceColumns'

export function InvoicesTable({ invoices, selection, onChanged }) {
  const cols = useInvoiceColumns(selection)
  const { sorted, sort, toggle } =
    useTableSort(invoices, cols, 'date', 'desc')

  return (
    <Table cols={cols} sort={sort} onSort={toggle}>
      {sorted.map((invoice) => (
        <InvoiceRow key={invoice.id} invoice={invoice}
          selected={selection.ids.has(invoice.id)}
          onToggle={selection.toggle} onChanged={onChanged} />
      ))}
    </Table>
  )
}
