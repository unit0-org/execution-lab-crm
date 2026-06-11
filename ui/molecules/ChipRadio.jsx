import { chipStyle, inputStyle } from './ChipRadio.styles'

// A chip-style native radio (so the choice submits). The selected/focus
// highlight lives in globals.css (data-chip-radio).
export function ChipRadio({ name, value, label, required, defaultChecked }) {
  return (
    <label style={chipStyle} data-chip-radio>
      <input type="radio" name={name} value={value} required={required}
        defaultChecked={defaultChecked} style={inputStyle} />
      {label}
    </label>
  )
}
