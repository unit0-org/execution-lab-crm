import { radioStyle } from './Radio.styles'

export function Radio({ checked, onChange, label }) {
  return (
    <input type="radio" checked={checked} onChange={onChange}
      aria-label={label} style={radioStyle} />
  )
}
