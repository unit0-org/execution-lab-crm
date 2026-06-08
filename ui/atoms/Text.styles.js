import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { fontSize } from '../tokens/typography'

const tones = {
  default: { color: color.text.primary },
  muted:   { color: color.text.muted },
  danger:  { color: color.status.errorText }
}

const sizes = { sm: { fontSize: fontSize.sm }, md: { fontSize: fontSize.md } }
const gutters = { none: 0, sm: space[2], md: space[4], lg: space[8] }

export const textStyle = (props = {}) => {
  const { tone = 'default', size = 'md', gutter, strike } = props

  return {
    margin: 0,
    marginBottom: gutters[gutter] ?? 0,
    textDecoration: strike ? 'line-through' : 'none',
    ...tones[tone],
    ...sizes[size]
  }
}
