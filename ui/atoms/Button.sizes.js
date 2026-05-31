import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { fontSize } from '../tokens/typography'

const pad = (a, b) => `${space[a]} ${space[b]}`

export const sizes = {
  sm: { padding: pad(1, 3), borderRadius: radius.sm, fontSize: fontSize.sm },
  md: { padding: pad(2, 4), borderRadius: radius.md, fontSize: fontSize.sm },
  lg: { padding: pad(3, 4), borderRadius: radius.md, fontSize: fontSize.md }
}
