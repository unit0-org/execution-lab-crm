import { topbarStyle } from './Topbar.styles'

/**
 * Sticky bar at the top of the scrolling main area (global command
 * bar): the mobile menu hamburger, global search, primary actions.
 * Horizontal padding lives in globals.css, so breakpoints can tune it.
 */
export function Topbar({ children }) {
  return <div data-topbar style={topbarStyle}>{children}</div>
}
