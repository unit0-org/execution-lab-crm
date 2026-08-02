import { space } from '../tokens/space'

export const cardGridStyle = (align, min) => ({
  display: 'grid',
  gap: space[4],
  gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
  alignItems: align
})
