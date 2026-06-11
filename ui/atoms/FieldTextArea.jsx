import { fieldTextAreaStyle } from './FieldTextArea.styles'

// Dark portal multi-line input. Labelled via Field; pass name/rows/etc.
export function FieldTextArea({ rows = 3, ...rest }) {
  return <textarea rows={rows} style={fieldTextAreaStyle} {...rest} />
}
