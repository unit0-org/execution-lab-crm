import { checkboxStyle } from './Checkbox.styles'

const applyIndeterminate = (indeterminate) => (el) => {
  if (el) el.indeterminate = Boolean(indeterminate)
}

/**
 * Boolean toggle (`onChange` → `e.target.checked`). `disabled` greys it out
 * for a row that can't take part in a bulk action; say why beside it.
 */
export function Checkbox(props) {
  const { checked, onChange, label, indeterminate, disabled } = props

  return (
    <input type="checkbox" checked={checked} onChange={onChange}
      ref={applyIndeterminate(indeterminate)} disabled={disabled}
      aria-label={label} style={checkboxStyle(disabled)} />
  )
}
