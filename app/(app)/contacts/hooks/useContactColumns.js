'use client'

import { columns } from '../components/contactColumns'
import { rowColumns } from '@/ui/molecules/rowColumns'

// Contact-table columns with a leading select-all checkbox and a trailing
// delete column, from the shared row-action helper.
export function useContactColumns(selection) {
  return rowColumns(columns, { selection, deletable: true })
}
