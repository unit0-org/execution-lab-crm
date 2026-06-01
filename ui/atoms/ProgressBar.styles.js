import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const trackStyle = {
  position: 'relative', width: '100%', height: '4px',
  background: color.bg.subtle, borderRadius: radius.pill,
  overflow: 'hidden'
}

export const fillStyle = {
  position: 'absolute', top: 0, bottom: 0, width: '40%',
  borderRadius: radius.pill, background: color.accent.solid,
  animation: 'progress-indeterminate 1.2s ease-in-out infinite'
}
