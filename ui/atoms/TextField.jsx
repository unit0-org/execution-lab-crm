'use client'

import { fieldStyle, inputStyle, wrapStyle } from './TextField.styles'
import { TrailingSlot } from './TrailingSlot'
import { useRestoredField } from './useRestoredField'

export function TextField({ label, trailing, ...rest }) {
  const field = useRestoredField(rest)

  return (
    <label style={fieldStyle}>
      {label}
      <span style={wrapStyle}>
        <input style={inputStyle({ trailing })} {...rest} {...field} />
        <TrailingSlot>{trailing}</TrailingSlot>
      </span>
    </label>
  )
}
