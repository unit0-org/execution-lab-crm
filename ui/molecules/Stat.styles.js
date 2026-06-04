import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { font, fontSize, fontWeight } from '../tokens/typography'
import { toneColor } from '../tokens/tone'

export const statLabel = {
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: color.text.muted,
  marginBottom: space[2]
}

export const statValue = (tone) => ({
  fontFamily: font.mono,
  fontSize: fontSize['2xl'],
  fontWeight: fontWeight.bold,
  color: toneColor[tone] || color.text.primary,
  lineHeight: 1.1
})

export const statLinkStyle = {
  display: 'block',
  height: '100%',
  textDecoration: 'none',
  color: 'inherit'
}
