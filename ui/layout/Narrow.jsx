import { narrowStyle } from './Narrow.styles'

/** Centered, width-capped column (portal confirmation screens). */
export function Narrow({ max = 760, children }) {
  return <div style={narrowStyle(max)}>{children}</div>
}
