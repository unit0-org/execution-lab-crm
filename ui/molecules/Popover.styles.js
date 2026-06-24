import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const wrapStyle = {
  position: 'relative', display: 'inline-flex', alignItems: 'center'
}

// Which trigger edge the panel hangs from (viewport-relative, for fixed).
const edge = (align, rect) =>
  align === 'end'
    ? { right: window.innerWidth - rect.right }
    : { left: rect.left }

// Fixed panel under the trigger (not absolute) so a scrolling ancestor
// like a table's overflow wrapper can't clip it.
export const panelStyle = (align, rect) => ({
  position: 'fixed', top: rect.bottom + 4, zIndex: 30,
  ...edge(align, rect),
  width: 'max-content', maxWidth: 'min(320px, 90vw)',
  boxSizing: 'border-box', padding: space[3],
  background: color.bg.surface, borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
})
