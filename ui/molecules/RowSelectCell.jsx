import { SelectCell } from './SelectCell'

// The leading row-select checkbox cell, or nothing when the table isn't
// selectable. `select` = { checked, onToggle }.
export function RowSelectCell({ select }) {
  if (!select) return null

  return <SelectCell checked={select.checked} onToggle={select.onToggle} />
}
