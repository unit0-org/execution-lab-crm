import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const wrapStyle = { position: 'relative', display: 'inline-flex' }

export const triggerStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: space[2],
  padding: `${space[2]} ${space[3]}`,
  cursor: 'pointer',
  background: color.bg.sunken,
  color: color.text.muted,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md
}

// Fixed-positioned so the table's overflow wrapper can't clip the menu.
export const menuStyle = (rect) => ({
  position: 'fixed',
  zIndex: 50,
  top: rect.bottom + 4,
  left: rect.left,
  padding: space[2],
  background: color.bg.surface,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
})
