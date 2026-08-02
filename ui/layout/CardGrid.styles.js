import { space } from '../tokens/space'

// auto-fill keeps empty column tracks, so a short row stops short of the
// right edge and the cards keep their width. auto-fit collapses those
// tracks instead, letting the cards stretch across the full width.
const tracks = (fit) => (fit ? 'auto-fit' : 'auto-fill')

export const cardGridStyle = (align, min, fit) => ({
  display: 'grid',
  gap: space[4],
  gridTemplateColumns: `repeat(${tracks(fit)}, minmax(${min}px, 1fr))`,
  alignItems: align
})
