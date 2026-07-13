import { shellStyle, innerStyle } from './PortalShell.styles'

/** Dark, centered page frame for the no-login client portal. */
export function PortalShell({ children, max = 1080 }) {
  return (
    <div style={shellStyle}>
      <div style={innerStyle(max)}>{children}</div>
    </div>
  )
}
