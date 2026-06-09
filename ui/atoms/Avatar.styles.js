import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

export const imageStyle = (size) => ({
  width: size, height: size, borderRadius: radius.pill,
  objectFit: 'cover', display: 'block', flexShrink: 0
})

export const fallbackStyle = (size) => ({
  width: size, height: size, borderRadius: radius.pill,
  display: 'inline-flex', alignItems: 'center',
  justifyContent: 'center', flexShrink: 0,
  background: color.accent.soft, color: color.accent.text,
  fontSize: size * 0.4, fontWeight: 700, lineHeight: 1
})
