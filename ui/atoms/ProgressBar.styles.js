import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { quickTransition } from '../tokens/motion'

export const trackStyle = {
  position: 'relative', width: '100%', height: '4px',
  background: color.bg.subtle, borderRadius: radius.pill,
  overflow: 'hidden'
}

const base = {
  position: 'absolute', top: 0, bottom: 0,
  borderRadius: radius.pill, background: color.accent.solid
}

// Without a share to show, the fill sweeps to say "working"; with one it
// grows to that share, so a batch reads as N of M done rather than "busy".
const sweeping = {
  width: '40%', animation: 'progress-indeterminate 1.2s ease-in-out infinite'
}

const filled = (share) => ({
  width: `${Math.round(share * 100)}%`, transition: quickTransition('width')
})

export const fillStyle = (share) =>
  ({ ...base, ...(share == null ? sweeping : filled(share)) })
