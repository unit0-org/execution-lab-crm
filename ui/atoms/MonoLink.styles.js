import { font, fontWeight } from '../tokens/typography'
import { color } from '../tokens/color'

export const monoLinkStyle = (size = 11, underline) => ({
  fontFamily: font.mono,
  fontSize: `${size}px`,
  fontWeight: fontWeight.semibold,
  letterSpacing: '0.04em',
  color: color.accent.solid,
  textDecoration: 'none',
  borderBottom: underline ? `1px solid ${color.accent.soft}` : 'none'
})
