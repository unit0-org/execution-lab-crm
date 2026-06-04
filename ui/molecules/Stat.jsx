import NextLink from 'next/link'
import { StatBody } from './StatBody'
import { statLinkStyle } from './Stat.styles'

// A headline metric; when `href` is set the whole card links there.
export function Stat({ label, value, tone, href }) {
  if (!href) return <StatBody label={label} value={value} tone={tone} />

  return (
    <NextLink href={href} style={statLinkStyle} data-card-lift>
      <StatBody label={label} value={value} tone={tone} />
    </NextLink>
  )
}
