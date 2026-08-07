import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { entrance } from '../tokens/motion'
import { layer } from '../tokens/layer'
import { placementStyle } from './Popover.placement'

export const wrapStyle = {
  position: 'relative', display: 'inline-flex', alignItems: 'center'
}

// Fixed panel (not absolute) so a scrolling ancestor like a table's
// overflow wrapper can't clip it. `layer.menu` outranks `layer.modal`: both
// this and a dialog portal to <body>, so a lower z-index puts the menu behind
// the dialog and its backdrop, where it can't be seen or clicked.
export const panelStyle = (align, rect, placement = 'bottom', height = 0) => ({
  ...entrance('slideDown', 'quick'),
  position: 'fixed', zIndex: layer.menu,
  ...placementStyle(align, rect, placement, height),
  width: 'max-content', maxWidth: 'min(320px, 90vw)',
  boxSizing: 'border-box', padding: space[3], overflowY: 'auto',
  background: color.bg.surface, borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
})
