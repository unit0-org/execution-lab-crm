import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { radius } from '../tokens/radius'

const borderC = { mint: color.soft.cool, wave: color.soft.wave }
const glowC = { mint: color.glow.mint, wave: color.glow.wave }

export const panelStyle = (tone) => ({
  position: 'relative',
  background: color.bg.surface,
  border: `1px solid ${borderC[tone] || color.soft.cool}`,
  borderRadius: radius.xl,
  boxShadow: glowC[tone] || color.glow.mint,
  padding: space[8],
  overflow: 'hidden'
})

export const stripeStyle = {
  position: 'absolute',
  top: 0, left: 0, right: 0,
  height: '5px',
  background: color.gradient.brandX
}
