import { fieldStyle, inputStyle } from './TextField.styles'

export function Select({ label, options, ...rest }) {
  return (
    <label style={fieldStyle}>
      {label}
      <select style={inputStyle} {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}
