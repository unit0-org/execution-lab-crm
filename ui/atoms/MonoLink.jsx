import NextLink from 'next/link'
import { monoLinkStyle } from './MonoLink.styles'

// Monospaced accent link. External by default (opens a new tab); pass
// external={false} for in-app navigation in the same tab.
export function MonoLink(props) {
  const { href, size = 11, underline, external = true, children } = props
  const style = monoLinkStyle(size, underline)

  if (!external)
    return (
      <NextLink href={href} data-mono-link style={style}>{children}</NextLink>
    )

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-mono-link
      style={style}>{children}</a>
  )
}
