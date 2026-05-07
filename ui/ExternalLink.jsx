import { appLinkStyle } from './AppLink.styles'

const wrapped = { ...appLinkStyle, wordBreak: 'break-word' }

// Anchor that opens in a new tab; styled to match AppLink.
export function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="noreferrer" style={wrapped}>{children}</a>
}
