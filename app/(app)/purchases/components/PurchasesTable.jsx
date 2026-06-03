'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { PurchaseRow } from './PurchaseRow'
import { columns } from './purchaseColumns'

export function PurchasesTable({ purchases }) {
  const { sorted, sort, toggle } =
    useTableSort(purchases, columns, 'date', 'desc')

  return (
    <Table cols={columns} sort={sort} onSort={toggle}>
      {sorted.map((purchase) => (
        <PurchaseRow key={purchase.id} purchase={purchase} />
      ))}
    </Table>
  )
}
