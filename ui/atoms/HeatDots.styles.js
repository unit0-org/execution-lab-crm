import { color } from '../tokens/color'

export const dotsStyle = {
  display: 'inline-flex',
  gap: '3px',
  flexShrink: 0
}

export const dotStyle = (on) => ({
  width: '8px',
  height: '8px',
  borderRadius: '999px',
  background: on ? color.accent.solid : color.bg.subtle
})
