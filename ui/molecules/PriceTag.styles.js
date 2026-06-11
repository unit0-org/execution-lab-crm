import { font, fontWeight } from '../tokens/typography'
import { color } from '../tokens/color'

export const rowStyle = { display: 'flex', alignItems: 'baseline', gap: '10px' }

export const regularStyle = (size) => ({
  fontFamily: font.sans,
  fontWeight: fontWeight.semibold,
  fontSize: `${Math.round(size * 0.5)}px`,
  color: color.text.subtle,
  textDecoration: 'line-through'
})

export const priceStyle = (size) => ({
  fontFamily: font.sans,
  fontWeight: fontWeight.black,
  fontSize: `${size}px`,
  lineHeight: 1,
  color: color.text.primary
})

export const currencyStyle = {
  fontFamily: font.mono,
  fontSize: '12px',
  fontWeight: fontWeight.semibold,
  color: color.text.muted,
  letterSpacing: '0.08em'
}
