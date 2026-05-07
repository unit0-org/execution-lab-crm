import { toolbarStyle } from './Toolbar.styles'

// Horizontal action bar — used for selection toolbars, batch actions.
export function Toolbar({ children }) {
  return <div style={toolbarStyle}>{children}</div>
}
