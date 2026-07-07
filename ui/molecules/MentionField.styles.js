import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { textAreaStyle } from '../atoms/TextArea.styles'

const box = {
  boxSizing: 'border-box', font: 'inherit', borderRadius: radius.md,
  padding: `${space[2]} ${space[3]}`,
  whiteSpace: 'pre-wrap', overflowWrap: 'break-word'
}

// Transparent textarea on top; owns the border so the focus ring shows.
export const areaStyle = {
  ...textAreaStyle, ...box, position: 'relative', zIndex: 1,
  color: 'transparent', background: 'transparent',
  caretColor: color.text.primary, border: `1px solid ${color.border.default}`
}

// Mirror behind: visible fill, text and pills; textarea draws the border.
export const mirrorStyle = {
  ...box, position: 'absolute', inset: 0, overflow: 'hidden',
  color: color.text.primary, background: color.bg.sunken,
  border: '1px solid transparent', pointerEvents: 'none'
}

// A picked @-mention, chip-styled without altering text layout.
export const pillStyle = {
  background: color.accent.soft, color: color.accent.solid,
  borderRadius: radius.sm, boxShadow: `0 0 0 2px ${color.accent.soft}`
}
