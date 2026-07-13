import NextLink from 'next/link'
import { NavProgress } from './NavProgress'
import { linkStyle } from './Link.styles'

/** Internal app navigation link. */
export function Link({ href, children, newTab }) {
  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noopener noreferrer' : undefined

  return (
    <NextLink href={href} data-link style={linkStyle}
      target={target} rel={rel}>
      {children}
      <NavProgress />
    </NextLink>
  )
}
