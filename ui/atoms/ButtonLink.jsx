import NextLink from 'next/link'
import { buttonStyle } from './Button.styles'

// A navigation link that looks like a Button (shares buttonStyle).
export function ButtonLink({ href, tone = 'default', size, target, children }) {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined

  return (
    <NextLink href={href} target={target} rel={rel}
      style={buttonStyle({ tone, size })}>
      {children}
    </NextLink>
  )
}
