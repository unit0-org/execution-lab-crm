import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const overlayStyle = {
  position: 'fixed', inset: 0, zIndex: 40, display: 'flex',
  alignItems: 'center', justifyContent: 'center', padding: space[4],
  background: 'rgba(0, 0, 0, 0.6)'
}

// Sized to a comfortable default, capped to the viewport, and resizable:
// drag the bottom-right corner to grow (up to 95vw × 85vh) or shrink.
export const panelStyle = (wide) => ({
  position: 'relative', padding: space[6],
  width: wide ? 'min(640px, 95vw)' : 'min(420px, 95vw)',
  maxWidth: '95vw', maxHeight: '85vh',
  overflow: 'auto', resize: 'both',
  background: color.bg.surface, borderRadius: radius.lg,
  border: `1px solid ${color.border.default}`
})

export const closeStyle = {
  position: 'absolute', top: space[3], right: space[3]
}
