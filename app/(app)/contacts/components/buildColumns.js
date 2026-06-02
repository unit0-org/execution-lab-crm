import { columns } from './contactColumns'

// Prepend a select-all column carrying the header checkbox state.
export function buildColumns(selection) {
  return [
    {
      key: 'select', select: true,
      checked: selection.allSelected, onToggle: selection.toggleAll
    },
    ...columns
  ]
}
