import { textareaStyle } from './Textarea.styles'

export function Textarea({ id, name, defaultValue, value, onChange, rows = 4, required }) {
  return (
    <textarea
      id={id}
      name={name}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      style={textareaStyle}
    />
  )
}
