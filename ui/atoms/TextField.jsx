import { fieldStyle, inputStyle } from './TextField.styles'

export function TextField({ label, ...rest }) {
  return (
    <label style={fieldStyle}>
      {label}
      <input style={inputStyle} {...rest} />
    </label>
  )
}
