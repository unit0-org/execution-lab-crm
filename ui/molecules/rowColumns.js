// Wrap a table's data columns with the optional shared row-action columns:
// a leading select-all checkbox column (when a selection is passed) and a
// trailing delete column (when deletable). Keeps columns files data-only.
const selectColumn = (selection) => ({
  key: 'select',
  select: true,
  indeterminate: selection.ids.size > 0 && !selection.allSelected,
  checked: selection.allSelected,
  onToggle: selection.toggleAll
})

export function rowColumns(cols, { selection, deletable } = {}) {
  const lead = selection ? [selectColumn(selection)] : []
  const tail = deletable ? [{ label: '' }] : []

  return [...lead, ...cols, ...tail]
}
