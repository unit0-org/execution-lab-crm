import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { radius } from '../tokens/radius'

const borderC = { launch: color.soft.cool, wave: color.soft.wave }
const glowC = { launch: color.glow.mint, wave: color.glow.wave }
const tintC = { launch: color.tint.cool, wave: color.tint.wave }

export const panelStyle = (tone) => ({
  position: 'relative', display: 'flex', flexWrap: 'wrap',
  background: color.bg.surface, borderRadius: radius.xl,
  border: `1px solid ${borderC[tone]}`, overflow: 'hidden',
  boxShadow: glowC[tone], marginBottom: space[8]
})
export const stripeStyle = {
  position: 'absolute', top: 0, left: 0, bottom: 0,
  width: '5px', background: color.gradient.brand
}
export const mainStyle = {
  flex: '2 1 340px', minWidth: 0,
  padding: `${space[8]} ${space[6]} ${space[8]} ${space[10]}`
}
export const asideStyle = (tone) => ({
  flex: '1 1 280px', display: 'flex', flexDirection: 'column',
  justifyContent: 'space-between', gap: space[6],
  padding: `${space[8]} ${space[6]}`,
  borderLeft: `1px solid ${color.border.default}`,
  background: tintC[tone]
})
