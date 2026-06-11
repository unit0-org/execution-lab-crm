import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { space } from '../tokens/space'

export const cardStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: space[3],
  padding: `${space[3]} ${space[4]}`,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md,
  background: color.bg.canvas,
  color: color.text.secondary,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '14px'
}

export const inputStyle = {
  position: 'absolute', opacity: 0, width: 0, height: 0
}

export const dotStyle = {
  width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
  border: `1.5px solid ${color.text.subtle}`
}
