import NextLink from 'next/link'
import { NavProgress } from './NavProgress'
import { linkCardStyle, overlayStyle } from './LinkCard.styles'

/**
 * Card whose whole surface links to `href` (stretched-link overlay; lifts
 * on hover), so no invalid button-inside-anchor. Wrap any control inside
 * in `RaisedControl` to keep it clickable.
 */
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
