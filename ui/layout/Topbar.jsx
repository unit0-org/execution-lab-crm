import { topbarStyle } from './Topbar.styles'

// Sticky flex bar pinned to the top of the scrolling main area; holds
// the mobile menu hamburger, global search, and primary actions.
// Horizontal padding lives in globals.css so the breakpoints can tune it.
export function Topbar({ children }) {
  return <div data-topbar style={topbarStyle}>{children}</div>
}
