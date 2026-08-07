import { space } from '../tokens/space'
import { paddingY } from './Button.sizes'

// Icon-only: a compact square that centres the glyph, in place of the text
// button's wide padding and baseline-aligned content.
const square = { sm: space[2], md: space[2], lg: space[3] }

// Joined to a text button (a split button's caret), it keeps the square's
// horizontal padding but takes the text half's vertical padding. The square
// is the taller of the two at `sm` (a 16px glyph in 8px of padding, against
// a 21px line box in 4px), and since the halves stretch to a shared height
// that made the whole control overhang the plain Button beside it.
const box = (size, join) =>
  (join ? `${paddingY[size]} ${square[size]}` : square[size])

export const iconOnly = (icon, size = 'md', join) =>
  (icon
    ? {
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      lineHeight: 0, padding: box(size, join)
    }
    : null)
