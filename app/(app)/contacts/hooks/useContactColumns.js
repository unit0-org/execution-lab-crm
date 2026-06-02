'use client'

import { columns } from '../components/contactColumns'

// The contact-table columns, led by a select-all checkbox column whose
// checked state and toggle come from the current row selection.
export function useContactColumns(selection) {
  return [
    {
      key: 'select', select: true,
      checked: selection.allSelected, onToggle: selection.toggleAll
    },
    ...columns
  ]
}
