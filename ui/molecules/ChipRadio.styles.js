import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { space } from '../tokens/space'
import { font, fontWeight } from '../tokens/typography'

export const chipStyle = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${space[3]} ${space[4]}`,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md,
  background: 'transparent',
  color: color.text.muted,
  cursor: 'pointer',
  fontFamily: font.sans,
  fontSize: '13px',
  fontWeight: fontWeight.bold,
  letterSpacing: '0.04em',
  textTransform: 'uppercase'
}

export const inputStyle = {
  position: 'absolute', opacity: 0, width: 0, height: 0
}
