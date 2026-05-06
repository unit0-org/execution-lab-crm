import { inputStyle } from './Input.styles'

const style = { ...inputStyle, minHeight: '5rem', resize: 'vertical', fontFamily: 'inherit' }

export function Textarea({ id, name, defaultValue, rows = 4, required }) {
  return (
    <textarea
      id={id}
      name={name}
      defaultValue={defaultValue}
      rows={rows}
      required={required}
      style={style}
    />
  )
}
