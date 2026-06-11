import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { font, fontWeight } from '../tokens/typography'

export const rowStyle = {
  display: 'flex', gap: space[3], alignItems: 'flex-start'
}

export const numStyle = {
  flexShrink: 0,
  width: 26, height: 26, borderRadius: '50%',
  border: `1.5px solid ${color.warmth.cold}`,
  color: color.warmth.cold,
  fontFamily: font.mono, fontSize: '12px', fontWeight: fontWeight.bold,
  display: 'flex', alignItems: 'center', justifyContent: 'center'
}

export const titleStyle = {
  fontFamily: font.sans, fontSize: '14px',
  fontWeight: fontWeight.bold, color: color.text.primary
}
