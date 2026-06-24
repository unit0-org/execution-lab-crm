import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

export const wrapStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: 640,
  aspectRatio: '16 / 9',
  borderRadius: radius.md,
  overflow: 'hidden',
  border: `1px solid ${color.border.default}`,
  background: color.bg.sunken
}

export const frameStyle = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  border: 0
}
