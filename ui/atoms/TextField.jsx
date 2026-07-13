'use client'

import { fieldStyle, inputStyle, wrapStyle } from './TextField.styles'
import { TrailingSlot } from './TrailingSlot'
import { FieldLabel } from './FieldLabel'
import { useRestoredField } from './useRestoredField'

/**
 * Text/email/number/date input (pass `type`, `value`, `onChange`,
 * `placeholder`).
 */
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
