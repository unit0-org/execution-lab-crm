import NextLink from 'next/link'
import { StatBody } from './StatBody'
import { statLinkStyle } from './Stat.styles'

/** Stat tile: a headline metric; `href` links the whole card. */
export function Stat({ label, value, tone, href }) {
  if (!href) return <StatBody label={label} value={value} tone={tone} />

  return (
    <NextLink href={href} style={statLinkStyle} data-card-lift>
      <StatBody label={label} value={value} tone={tone} />
    </NextLink>
  )
}
