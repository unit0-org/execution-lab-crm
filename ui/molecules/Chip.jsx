import NextLink from 'next/link'
import { chipStyle } from './Chip.styles'

// A small, clickable pill that links somewhere (e.g. a contact).
export function Chip({ href, children }) {
  return (
    <NextLink href={href} style={chipStyle} data-chip-interactive>
      {children}
    </NextLink>
  )
}
