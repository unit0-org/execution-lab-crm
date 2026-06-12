import { space } from '../tokens/space'

export const navStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[1],
  padding: space[4],
  // Extra right gap so the active pill clears the edge collapse toggle.
  paddingRight: space[6]
}
