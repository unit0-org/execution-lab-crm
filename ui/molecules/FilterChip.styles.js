import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

const base = {
  padding: `4px ${space[3]}`,
  borderRadius: radius.pill,
  fontSize: '12px',
  fontWeight: 600,
  textDecoration: 'none',
  whiteSpace: 'nowrap'
}

export const chipStyle = {
  ...base,
  background: color.bg.subtle,
  color: color.text.secondary
}

export const activeChipStyle = {
  ...base,
  background: color.accent.soft,
  color: color.accent.solid
}
