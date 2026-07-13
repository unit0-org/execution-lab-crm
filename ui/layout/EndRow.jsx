import { endRowStyle } from './EndRow.styles'

/** Row aligned to the end (right). */
export function EndRow({ children }) {
  return <div style={endRowStyle}>{children}</div>
}
