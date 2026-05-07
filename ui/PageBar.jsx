import { pageBarStyle } from './PageBar.styles'

// Sticky top bar above page content. Wraps the global app actions —
// Log CTA, settings, future search — passed as children.
export function PageBar({ children }) {
  return <header style={pageBarStyle}>{children}</header>
}
