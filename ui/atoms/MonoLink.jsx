import { monoLinkStyle } from './MonoLink.styles'

// Monospaced accent link (opens a new tab) — program links, footnotes,
// and secondary navigation across the portal.
export function MonoLink({ href, size = 11, underline, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-mono-link
      style={monoLinkStyle(size, underline)}>{children}</a>
  )
}
