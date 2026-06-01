import { fieldStyle, inputStyle, wrapStyle } from './TextField.styles'
import { TrailingSlot } from './TrailingSlot'

export function TextField({ label, trailing, ...rest }) {
  return (
    <label style={fieldStyle}>
      {label}
      <span style={wrapStyle}>
        <input style={inputStyle({ trailing })} {...rest} />
        <TrailingSlot>{trailing}</TrailingSlot>
      </span>
    </label>
  )
}
