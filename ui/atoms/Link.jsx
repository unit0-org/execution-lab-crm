import NextLink from 'next/link'
import { linkStyle } from './Link.styles'

export function Link({ href, children }) {
  return (
    <NextLink href={href} style={linkStyle}>
      {children}
    </NextLink>
  )
}
