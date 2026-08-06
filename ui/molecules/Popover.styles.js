import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { entrance } from '../tokens/motion'
import { layer } from '../tokens/layer'

export const wrapStyle = {
  position: 'relative', display: 'inline-flex', alignItems: 'center'
}

// Which trigger edge the panel hangs from (viewport-relative, for fixed).
const edge = (align, rect) =>
  align === 'end'
    ? { right: window.innerWidth - rect.right }
    : { left: rect.left }

// Where the panel sits: under the trigger, or beside it (the sidebar rail's
// flyout, which has no room below and hangs off the icon's right edge).
const placements = {
  bottom: (align, rect) => ({ top: rect.bottom + 4, ...edge(align, rect) }),
  right: (align, rect) => ({ top: rect.top, left: rect.right + 8 })
}

// Fixed panel (not absolute) so a scrolling ancestor like a table's
// overflow wrapper can't clip it. It drops out of the trigger, which shows
// where the menu came from. `layer.menu` outranks `layer.modal`: both this
// and a dialog portal to <body>, so a lower z-index puts the menu behind
// the dialog and its backdrop, where it can't be seen or clicked.
export const panelStyle = (align, rect, placement = 'bottom') => ({
  ...entrance('slideDown', 'quick'),
  position: 'fixed', zIndex: layer.menu,
  ...(placements[placement] || placements.bottom)(align, rect),
  width: 'max-content', maxWidth: 'min(320px, 90vw)',
  boxSizing: 'border-box', padding: space[3],
  background: color.bg.surface, borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
})
