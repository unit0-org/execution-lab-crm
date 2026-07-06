'use client'

import { columns } from '../components/invoiceColumns'
import { rowColumns } from '@/ui/molecules/rowColumns'

// Invoice-table columns with a leading select-all checkbox column; the
// trailing kebab-menu column stays defined in invoiceColumns.
export function useInvoiceColumns(selection) {
  return rowColumns(columns, { selection })
}
