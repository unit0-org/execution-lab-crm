import NextLink from 'next/link'
import { NavProgress } from './NavProgress'
import { linkCardStyle, overlayStyle } from './LinkCard.styles'

// A Card whose entire surface links to `href`. The link is a stretched
// overlay, so a control raised above it (see RaisedControl) stays
// clickable — no invalid button-inside-anchor. Lifts on hover.
export function LinkCard({ href, label, children }) {
  return (
    <div data-card-lift data-hover-host style={linkCardStyle}>
      <NextLink href={href} aria-label={label} style={overlayStyle}>
        <NavProgress />
      </NextLink>
      {children}
    </div>
  )
}
