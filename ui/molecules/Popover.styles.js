import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const wrapStyle = { position: 'relative', display: 'inline-block' }

export const panelStyle = {
  position: 'absolute', top: '100%', left: 0, zIndex: 30,
  marginTop: space[1], width: 'max-content', maxWidth: 'min(320px, 90vw)',
  boxSizing: 'border-box', padding: space[3],
  background: color.bg.surface, borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
}
