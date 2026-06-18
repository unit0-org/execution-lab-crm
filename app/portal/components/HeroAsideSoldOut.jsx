import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { soldOutStyle } from './HeroAsideSoldOut.styles'

// Sold-out aside: one large, centered "Sold out" filling the panel's right
// side, since price, CTA, and note all drop out once seats are gone.
export function HeroAsideSoldOut() {
  return (
    <div style={soldOutStyle}>
      <MonoLabel tone="danger" size={40} caps align="center">
        Sold out
      </MonoLabel>
    </div>
  )
}
