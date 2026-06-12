import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const overlayStyle = {
  position: 'fixed', inset: 0, zIndex: 40, display: 'flex',
  alignItems: 'center', justifyContent: 'center', padding: space[4],
  background: 'rgba(0, 0, 0, 0.6)'
}

export const panelStyle = (wide) => ({
  position: 'relative', width: '100%', padding: space[6],
  maxWidth: wide ? '640px' : '420px',
  maxHeight: '85vh', overflowY: 'auto',
  background: color.bg.surface, borderRadius: radius.lg,
  border: `1px solid ${color.border.default}`
})

export const closeStyle = {
  position: 'absolute', top: space[3], right: space[3]
}
