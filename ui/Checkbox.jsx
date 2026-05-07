import { checkboxStyle } from './Checkbox.styles'

// Controlled checkbox. `indeterminate` requires a ref because there's no
// HTML attribute for it — using suppressHydrationWarning + ref callback.
function setIndeterminate(node, value) {
  if (node) node.indeterminate = Boolean(value)
}

export function Checkbox({ checked, onChange, indeterminate, label }) {
  return (
    <input
      type="checkbox"
      aria-label={label}
      checked={checked}
      onChange={onChange}
      ref={(n) => setIndeterminate(n, indeterminate)}
      style={checkboxStyle}
    />
  )
}
