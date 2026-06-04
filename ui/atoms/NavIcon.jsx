import { Icon } from './Icon'
import { EmojiIcon } from './EmojiIcon'

// A nav glyph: an emoji when one is given, otherwise a line icon.
export function NavIcon({ icon, emoji }) {
  if (emoji) return <EmojiIcon glyph={emoji} size={18} />

  return <Icon name={icon} size={18} />
}
