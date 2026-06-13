import { topbarStyle } from './Topbar.styles'

// Sticky bar pinned to the top of the scrolling main area; holds the
// global search and primary actions. Horizontal padding lives in
// globals.css so it can clear the mobile hamburger.
export function Topbar({ children }) {
  return <div data-topbar style={topbarStyle}>{children}</div>
}
