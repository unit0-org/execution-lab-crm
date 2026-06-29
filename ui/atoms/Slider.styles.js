import { color } from '../tokens/color'

// 8px vertical padding centers the 4px track + 16px thumb; the ticks row
// insets 8px (the thumb radius) so each dot's centre lines up with a stop.
export const wrapStyle = {
  position: 'relative', display: 'block', padding: '8px 0'
}

export const ticksStyle = {
  position: 'absolute', inset: '0 8px', display: 'flex',
  alignItems: 'center', justifyContent: 'space-between',
  pointerEvents: 'none'
}

export const dotStyle = (on) => ({
  width: '8px', height: '8px', borderRadius: '999px',
  background: on ? color.accent.solid : color.border.strong
})

export const rangeStyle = { position: 'relative', display: 'block' }
