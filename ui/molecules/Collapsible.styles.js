import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { fontSize, fontWeight } from '../tokens/typography'

export const headerStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  width: '100%', padding: 0, background: 'none', border: 'none',
  cursor: 'pointer', color: color.text.secondary
}

export const titleStyle = {
  fontSize: fontSize.sm, fontWeight: fontWeight.bold,
  textTransform: 'uppercase', letterSpacing: '0.06em'
}

export const bodyStyle = (open) => ({
  display: open ? 'block' : 'none', marginTop: space[3]
})

export const chevronStyle = (open) => ({
  display: 'inline-flex', color: color.text.muted,
  transition: 'transform var(--motion-quick) var(--motion-ease)',
  transform: open ? 'rotate(0deg)' : 'rotate(-90deg)'
})
