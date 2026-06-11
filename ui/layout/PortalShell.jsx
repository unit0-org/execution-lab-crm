import { shellStyle, innerStyle } from './PortalShell.styles'

// The portal's dark, centered page frame (no-login client surface).
export function PortalShell({ children, max = 1080 }) {
  return (
    <div style={shellStyle}>
      <div style={innerStyle(max)}>{children}</div>
    </div>
  )
}
