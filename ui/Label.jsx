import { labelStyle } from './Field.styles'

export function Label({ htmlFor, children }) {
  return <label htmlFor={htmlFor} style={labelStyle}>{children}</label>
}
