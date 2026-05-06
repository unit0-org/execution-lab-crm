import { selectStyle } from './Select.styles'

export function Select({ id, name, defaultValue, required, value, onChange, children }) {
  return (
    <select
      id={id}
      name={name}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      required={required}
      style={selectStyle}
    >
      {children}
    </select>
  )
}
