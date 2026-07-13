import { raisedControlStyle } from './RaisedControl.styles'

/**
 * Lifts a control (e.g. a delete button) above a `LinkCard`'s stretched
 * link so it keeps receiving clicks.
 */
export function RaisedControl({ children }) {
  return <span style={raisedControlStyle}>{children}</span>
}
