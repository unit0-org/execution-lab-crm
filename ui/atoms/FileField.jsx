import { fieldStyle } from './TextField.styles'

export function FileField({ label, ...rest }) {
  return (
    <label style={fieldStyle}>
      {label}
      <input type="file" {...rest} />
    </label>
  )
}
