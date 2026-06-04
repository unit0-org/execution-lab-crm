import { bodyStyle } from './Collapsible.styles'

// Hidden (not unmounted) when closed, so children keep their state.
export function CollapsibleBody({ open, children }) {
  return <div style={bodyStyle(open)}>{children}</div>
}
