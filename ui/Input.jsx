import { inputStyle } from './Input.styles'

export function Input({ id, name, type = 'text', defaultValue, required, value, onChange }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      required={required}
      style={inputStyle}
    />
  )
}
