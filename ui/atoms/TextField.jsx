'use client'

import { fieldStyle, inputStyle, wrapStyle } from './TextField.styles'
import { TrailingSlot } from './TrailingSlot'
import { FieldLabel } from './FieldLabel'
import { useRestoredField } from './useRestoredField'

export function TextField({ label, trailing, saved, ...rest }) {
  const field = useRestoredField(rest)

  return (
    <label style={fieldStyle}>
      <FieldLabel label={label} required={rest.required} />
      <span style={wrapStyle}>
        <input style={inputStyle({ trailing, saved })} {...rest} {...field} />
        <TrailingSlot>{trailing}</TrailingSlot>
      </span>
    </label>
  )
}
