import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const wrapStyle = { position: 'relative' }

// Fixed-positioned under its anchor field so a Modal or table overflow
// wrapper can't clip it (same trick as SwatchMenu).
export const listStyle = (rect) => ({
  position: 'fixed', zIndex: 50,
  top: rect.bottom + 4, left: rect.left, width: rect.width,
  maxHeight: '200px', overflowY: 'auto',
  display: 'flex', flexDirection: 'column',
  background: color.bg.surface, borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
})
