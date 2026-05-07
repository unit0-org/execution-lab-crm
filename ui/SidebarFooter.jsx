import { sidebarFooterStyle } from './SidebarFooter.styles'

// Stuck to the bottom of the SidebarShell via marginTop: auto.
export function SidebarFooter({ children }) {
  return <div style={sidebarFooterStyle}>{children}</div>
}
