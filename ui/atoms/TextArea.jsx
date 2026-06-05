import { fieldStyle } from './TextField.styles'
import { textAreaStyle } from './TextArea.styles'

// A multi-line text input, styled to match TextField.
export function TextArea({ label, rows = 4, ...rest }) {
  return (
    <label style={fieldStyle}>
      {label}
      <textarea rows={rows} style={textAreaStyle} {...rest} />
    </label>
  )
}
