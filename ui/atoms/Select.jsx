import { fieldStyle, wrapStyle } from './TextField.styles'
import { selectStyle, chevronStyle } from './Select.styles'
import { Icon } from './Icon'
import { toSelectOption } from './toSelectOption'

export function Select({ label, options, ...rest }) {
  const items = options.map(toSelectOption)

  return (
    <label style={fieldStyle}>
      {label}
      <span style={wrapStyle}>
        <select style={selectStyle} {...rest}>
          {items.map((item) => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>
        <span style={chevronStyle}><Icon name="chevron" size={16} /></span>
      </span>
    </label>
  )
}
