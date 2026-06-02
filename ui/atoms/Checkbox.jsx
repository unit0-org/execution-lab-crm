import { checkboxStyle } from './Checkbox.styles'

export function Checkbox({ checked, onChange, label }) {
  return (
    <input type="checkbox" checked={checked} onChange={onChange}
      aria-label={label} style={checkboxStyle} />
  )
}
