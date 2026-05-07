import { toolbarStyle } from './Toolbar.styles'

export function Toolbar({ variant, children }) {
  return <div style={toolbarStyle(variant)}>{children}</div>
}
