import { shellStyle, mainStyle } from './AppShell.styles'

// Two-column app layout: sidebar slot + main slot. Used by the
// route-group layout to wrap every signed-in route.
export function AppShell({ sidebar, children }) {
  return (
    <div style={shellStyle}>
      {sidebar}
      <div style={mainStyle}>{children}</div>
    </div>
  )
}
