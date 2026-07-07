import { raisedControlStyle } from './RaisedControl.styles'

// Wrap a control (e.g. a delete button) placed inside a LinkCard so it
// sits above the stretched-link overlay and keeps receiving clicks.
export function RaisedControl({ children }) {
  return <span style={raisedControlStyle}>{children}</span>
}
