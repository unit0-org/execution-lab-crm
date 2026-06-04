import NextLink from 'next/link'
import { chipStyle, activeChipStyle } from './FilterChip.styles'

// One filter option: a pill link, highlighted when it is active.
export function FilterChip({ href, label, active }) {
  const style = active ? activeChipStyle : chipStyle

  return <NextLink href={href} style={style}>{label}</NextLink>
}
