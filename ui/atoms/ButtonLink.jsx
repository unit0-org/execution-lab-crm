import NextLink from 'next/link'
import { buttonStyle } from './Button.styles'

// A navigation link that looks like a Button (shares buttonStyle).
export function ButtonLink({ href, tone = 'default', size, children }) {
  return (
    <NextLink href={href} style={buttonStyle({ tone, size })}>
      {children}
    </NextLink>
  )
}
