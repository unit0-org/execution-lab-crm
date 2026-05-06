import { textareaStyle } from './Textarea.styles'

export function Textarea({ id, name, defaultValue, rows = 4, required }) {
  return (
    <textarea
      id={id}
      name={name}
      defaultValue={defaultValue}
      rows={rows}
      required={required}
      style={textareaStyle}
    />
  )
}
