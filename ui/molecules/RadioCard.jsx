import { cardStyle, inputStyle, dotStyle } from './RadioCard.styles'

// One selectable option: a visually-hidden native radio (so the choice
// submits) + a styled card. The :checked highlight lives in globals.css.
export function RadioCard({ name, value, required }) {
  return (
    <label style={cardStyle} data-radio-card>
      <input type="radio" name={name} value={value} required={required}
        style={inputStyle} />
      <span style={dotStyle} data-radio-dot />
      {value}
    </label>
  )
}
