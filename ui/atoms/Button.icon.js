import { space } from '../tokens/space'

// Icon-only: a compact square that centres the glyph, in place of the text
// button's wide padding and baseline-aligned content.
const pad = { sm: space[2], md: space[2], lg: space[3] }

export const iconOnly = (icon, size = 'md') =>
  (icon
    ? {
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      lineHeight: 0, padding: pad[size]
    }
    : null)
