import { narrowStyle } from './Narrow.styles'

// A centered, width-capped column (e.g. confirmation screens).
export function Narrow({ max = 760, children }) {
  return <div style={narrowStyle(max)}>{children}</div>
}
