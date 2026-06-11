import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { font, fontWeight } from '../tokens/typography'

export const rowStyle = {
  display: 'flex', alignItems: 'center', gap: space[3]
}

export const numStyle = {
  fontFamily: font.mono, fontSize: '11px',
  fontWeight: fontWeight.bold, letterSpacing: '0.1em',
  color: color.accent.solid
}

export const labelStyle = {
  fontFamily: font.sans, fontSize: '14px',
  fontWeight: fontWeight.extrabold, letterSpacing: '0.04em',
  textTransform: 'uppercase', color: color.text.primary
}

export const ruleStyle = {
  flex: 1, height: '1px', background: color.border.default
}
