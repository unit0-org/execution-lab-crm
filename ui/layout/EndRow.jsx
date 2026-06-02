import { endRowStyle } from './EndRow.styles'

// A flex row that aligns its content to the end (right).
export function EndRow({ children }) {
  return <div style={endRowStyle}>{children}</div>
}
