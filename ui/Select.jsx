import { inputStyle } from './Input.styles'

const style = { ...inputStyle, appearance: 'auto' }

export function Select({ id, name, defaultValue, required, value, onChange, children }) {
  return (
    <select
      id={id}
      name={name}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      required={required}
      style={style}
    >
      {children}
    </select>
  )
}
