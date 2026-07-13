import NextLink from 'next/link'
import { NavProgress } from './NavProgress'
import { buttonStyle } from './Button.styles'

/**
 * Navigation link styled as a Button (shares `buttonStyle`);
 * `target="_blank"` opens a new tab.
 */
export function ButtonLink({
  href, tone = 'default', size, block, target, children
}) {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined

  return (
    <NextLink href={href} target={target} rel={rel} data-tone={tone}
      style={buttonStyle({ tone, size, block })}>
      {children}
      <NavProgress />
    </NextLink>
  )
}
