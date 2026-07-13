import { GlowDot } from './GlowDot'
import { color } from '../tokens/color'
import { Inline } from '../layout/Inline'

const BRAND = [
  color.warmth.cool, color.warmth.cold,
  color.warmth.wave, color.warmth.warm
]

const meta = {
  title: 'Atoms/GlowDot',
  component: GlowDot,
  args: { color: color.warmth.cool }
}

export default meta

export const Default = {}

export const Large = { args: { size: 14 } }

export const Brand = {
  render: () => (
    <Inline>
      {BRAND.map((hue) => <GlowDot key={hue} color={hue} size={10} />)}
    </Inline>
  )
}
