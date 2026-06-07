import { itemStyle } from './Combobox.styles'

// Inline "create" row shown when the query matches no existing option.
export function CreateOptionRow({ show, label, query, onCreate }) {
  if (!show) return null

  return (
    <button type="button" style={itemStyle} onClick={onCreate}>
      + New {label} “{query}”
    </button>
  )
}
