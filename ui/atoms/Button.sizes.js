import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { fontSize } from '../tokens/typography'

// Vertical padding is exported on its own because a joined icon button (a
// split button's caret) has to borrow it: its own square padding is taller,
// and the taller half sets the height of the pair.
export const paddingY = { sm: space[1], md: space[2], lg: space[3] }

const paddingX = { sm: space[3], md: space[4], lg: space[4] }
const pad = (size) => `${paddingY[size]} ${paddingX[size]}`

export const sizes = {
  sm: { padding: pad('sm'), borderRadius: radius.sm, fontSize: fontSize.sm },
  md: { padding: pad('md'), borderRadius: radius.md, fontSize: fontSize.sm },
  lg: { padding: pad('lg'), borderRadius: radius.md, fontSize: fontSize.md }
}
