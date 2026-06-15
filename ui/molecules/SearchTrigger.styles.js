import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { space } from '../tokens/space'
import { font, fontSize } from '../tokens/typography'

export const triggerStyle = {
  display: 'flex', alignItems: 'center', gap: space[3],
  flex: 1, minWidth: 0, padding: `${space[2]} ${space[3]}`,
  background: color.bg.subtle, color: color.text.muted,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.lg, cursor: 'pointer'
}

export const textStyle = {
  flex: 1, minWidth: 0, textAlign: 'left',
  fontSize: fontSize.sm, color: color.text.muted
}

export const kbdStyle = {
  fontFamily: font.mono, fontSize: fontSize.xs,
  color: color.text.muted, background: color.bg.surface,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.sm, padding: `2px ${space[2]}`
}
