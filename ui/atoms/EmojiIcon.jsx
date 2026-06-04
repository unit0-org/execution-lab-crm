import { emojiStyle } from './EmojiIcon.styles'

// Renders an emoji glyph sized like an Icon (e.g. ⚙️ for Settings).
export function EmojiIcon({ glyph, size = 18 }) {
  return (
    <span aria-hidden="true" style={emojiStyle(size)}>{glyph}</span>
  )
}
