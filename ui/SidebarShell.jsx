import { sidebarShellStyle } from './SidebarShell.styles'

// Vertical sidebar container — sticky, hairline-bordered, paper bg.
// App composes Brand / Nav / sections inside this.
export function SidebarShell({ children }) {
  return <aside style={sidebarShellStyle}>{children}</aside>
}
