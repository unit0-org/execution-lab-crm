import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

// `align: 'top'` pins the panel to the top (used for the search palette on
// mobile so it opens under the thumb); the default centers it.
export const overlayStyle = (align = 'center') => ({
  position: 'fixed', inset: 0, zIndex: 40, display: 'flex',
  alignItems: align === 'top' ? 'flex-start' : 'center',
  justifyContent: 'center',
  padding: space[4],
  paddingTop: align === 'top' ? space[8] : space[4],
  background: 'rgba(0, 0, 0, 0.6)'
})

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
