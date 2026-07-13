import NextLink from 'next/link'
import { chipStyle, activeChipStyle } from './FilterChip.styles'

/** One URL-driven filter chip: a pill link, highlighted when active. */
export function FilterChip({ href, label, active }) {
  const style = active ? activeChipStyle : chipStyle

  return <NextLink href={href} style={style}>{label}</NextLink>
}
