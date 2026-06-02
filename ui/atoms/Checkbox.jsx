import { checkboxStyle } from './Checkbox.styles'

const applyIndeterminate = (indeterminate) => (el) => {
  if (el) el.indeterminate = Boolean(indeterminate)
}

export function Checkbox({ checked, onChange, label, indeterminate }) {
  return (
    <input type="checkbox" checked={checked} onChange={onChange}
      ref={applyIndeterminate(indeterminate)}
      aria-label={label} style={checkboxStyle} />
  )
}
