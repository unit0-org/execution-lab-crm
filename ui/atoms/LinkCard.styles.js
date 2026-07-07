import { cardStyle } from './Card.styles'

// A card surface that is itself a link. `position: relative` anchors the
// stretched overlay; `cursor: pointer` signals the whole thing clicks.
export const linkCardStyle = {
  ...cardStyle(),
  position: 'relative',
  cursor: 'pointer'
}

// The link stretched over the whole card. It sits above the passive
// content (name, date) so any click on the card navigates; interactive
// siblings raise themselves above it to stay clickable.
export const overlayStyle = {
  position: 'absolute', inset: 0, zIndex: 1, borderRadius: 'inherit'
}
