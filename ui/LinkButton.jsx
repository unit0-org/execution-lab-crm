import { buttonStyle } from './Button.styles'

// Anchor styled like a Button. Use for cross-page navigation that
// triggers a server flow (e.g. /api/google/connect).
export function LinkButton({ href, tone, size, children }) {
  return (
    <a href={href} style={buttonStyle({ tone, size })}>
      {children}
    </a>
  )
}
