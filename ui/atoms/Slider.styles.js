import { color } from '../tokens/color'

// 8px vertical padding centers the 4px track + 16px thumb.
export const wrapStyle = {
  position: 'relative', display: 'block', padding: '8px 0'
}

export const railStyle = {
  position: 'absolute', top: '50%', left: '8px', right: '8px',
  height: '4px', transform: 'translateY(-50%)',
  background: color.border.default, borderRadius: '999px',
  pointerEvents: 'none'
}

export const ticksStyle = {
  position: 'absolute', inset: '0', pointerEvents: 'none'
}

// Each dot is centred on its stop: the thumb travels from 8px to
// (100% - 8px), so translateX(-50%) puts its centre — not its edge — there.
export const dotStyle = (fraction, active) => ({
  position: 'absolute', top: '50%',
  left: `calc(8px + ${fraction} * (100% - 16px))`,
  transform: 'translate(-50%, -50%)',
  width: '8px', height: '8px', borderRadius: '999px',
  background: color.text.muted,
  visibility: active ? 'hidden' : 'visible'
})

export const rangeStyle = { position: 'relative', display: 'block' }
