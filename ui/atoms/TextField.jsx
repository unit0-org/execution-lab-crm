'use client'

import { fieldStyle, inputStyle, wrapStyle } from './TextField.styles'
import { TrailingSlot } from './TrailingSlot'
import { FieldLabel } from './FieldLabel'
import { useRestoredField } from './useRestoredField'

export function TextField({ label, trailing, ...rest }) {
  const field = useRestoredField(rest)

  return (
    <label style={fieldStyle}>
      <FieldLabel label={label} required={rest.required} />
      <span style={wrapStyle}>
        <input style={inputStyle({ trailing })} {...rest} {...field} />
        <TrailingSlot>{trailing}</TrailingSlot>
      </span>
    </label>
  )
}
