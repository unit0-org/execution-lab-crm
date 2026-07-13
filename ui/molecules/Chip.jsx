import NextLink from 'next/link'
import { chipStyle } from './Chip.styles'

/** Link chip: a small, clickable pill that links somewhere. */
export function Chip({ href, children }) {
  return (
    <NextLink href={href} style={chipStyle} data-chip-interactive>
      {children}
    </NextLink>
  )
}
