import { space } from '../tokens/space'

// The top margin is the whole component: it is what sets one block of nav
// entries apart from the block above, expanded or collapsed.
export const navSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[1],
  marginTop: space[5]
}
