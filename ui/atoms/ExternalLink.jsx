import { linkStyle } from './Link.styles'

// An anchor that opens an external URL safely in a new tab.
export function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={linkStyle}>
      {children}
    </a>
  )
}
