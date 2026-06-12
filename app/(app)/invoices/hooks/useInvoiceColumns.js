'use client'

import { columns } from '../components/invoiceColumns'

// The invoice-table columns, led by a select-all checkbox column whose
// state comes from the row selection: checked when all are selected,
// indeterminate when only some are.
export function useInvoiceColumns(selection) {
  const some = selection.ids.size > 0 && !selection.allSelected

  return [
    {
      key: 'select', select: true, indeterminate: some,
      checked: selection.allSelected, onToggle: selection.toggleAll
    },
    ...columns
  ]
}
