import { space } from '../tokens/space'

export const cardGridStyle = {
  display: 'grid',
  gap: space[4],
  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
  alignItems: 'stretch'
}
