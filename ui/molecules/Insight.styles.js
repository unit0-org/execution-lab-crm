import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

// A system insight reads distinct from neutral nugget cards: a soft
// accent wash with an accent left border.
export const insightStyle = {
  display: 'flex',
  gap: space[2],
  alignItems: 'baseline',
  padding: `${space[2]} ${space[3]}`,
  borderLeft: `3px solid ${color.accent.solid}`,
  borderRadius: radius.sm,
  background: color.accent.soft
}
