'use client'

import { fieldStyle } from './TextField.styles'
import { textAreaStyle } from './TextArea.styles'
import { useRestoredField } from './useRestoredField'

/** Multi-line text input, styled to match `TextField`. */
export function TextArea({ label, rows = 4, ...rest }) {
  const field = useRestoredField(rest)

  return (
    <label style={fieldStyle}>
      {label}
      <textarea rows={rows} style={textAreaStyle} {...rest} {...field} />
    </label>
  )
}
