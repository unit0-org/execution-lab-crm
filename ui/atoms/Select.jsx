import { fieldStyle, wrapStyle } from './TextField.styles'
import { selectStyle, chevronStyle } from './Select.styles'
import { Icon } from './Icon'

export function Select({ label, options, ...rest }) {
  return (
    <label style={fieldStyle}>
      {label}
      <span style={wrapStyle}>
        <select style={selectStyle} {...rest}>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <span style={chevronStyle}><Icon name="chevron" size={16} /></span>
      </span>
    </label>
  )
}
