import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'

export const skeletonStackStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[3],
  paddingTop: space[6],
}

export const skeletonRowStyle = (i) => ({
  height: i === 0 ? 32 : 56,
  width: i === 0 ? '40%' : '100%',
  borderRadius: i === 0 ? radius.sm : radius.lg,
  background: color.bg.subtle,
  animation: 'skeletonPulse 1.4s ease-in-out infinite',
})
