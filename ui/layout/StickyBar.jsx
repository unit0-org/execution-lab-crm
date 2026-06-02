import { stickyBarStyle } from './StickyBar.styles'

// A bar pinned to the top of the scroll area. It stays in normal flow,
// so its height is always reserved (no CLS), and hides its contents —
// staying pinned but invisible — when inactive.
export function StickyBar({ active, children }) {
  return <div style={stickyBarStyle(active)}>{children}</div>
}
