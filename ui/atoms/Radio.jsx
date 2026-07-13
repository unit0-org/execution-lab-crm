import { radioStyle } from './Radio.styles'

/** Single radio option. */
export function Radio({ checked, onChange, label }) {
  return (
    <input type="radio" checked={checked} onChange={onChange}
      aria-label={label} style={radioStyle} />
  )
}
