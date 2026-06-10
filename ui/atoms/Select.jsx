'use client'

import { fieldStyle, wrapStyle } from './TextField.styles'
import { selectStyle, chevronStyle } from './Select.styles'
import { Icon } from './Icon'
import { toSelectOption } from './toSelectOption'
import { FieldLabel } from './FieldLabel'
import { useRestoredField } from './useRestoredField'

export function Select({ label, options, ...rest }) {
  const items = options.map(toSelectOption)
  const field = useRestoredField(rest)

  return (
    <label style={fieldStyle}>
      <FieldLabel label={label} required={rest.required} />
      <span style={wrapStyle}>
        <select style={selectStyle} {...rest} {...field}>
          {items.map((item) => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>
        <span style={chevronStyle}><Icon name="chevron" size={16} /></span>
      </span>
    </label>
  )
}
