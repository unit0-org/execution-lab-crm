'use client'

import { columns } from '../components/contactColumns'

// The contact-table columns, led by a select-all checkbox column whose
// state comes from the row selection: checked when all are selected,
// indeterminate when only some are.
export function useContactColumns(selection) {
  const some = selection.ids.size > 0 && !selection.allSelected

  return [
    {
      key: 'select', select: true, indeterminate: some,
      checked: selection.allSelected, onToggle: selection.toggleAll
    },
    ...columns
  ]
}
