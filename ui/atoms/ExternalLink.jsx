import { linkStyle } from './Link.styles'

/** Link to an external URL — opens safely in a new tab. */
export function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={linkStyle}>
      {children}
    </a>
  )
}
