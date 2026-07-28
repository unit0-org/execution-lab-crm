import { space } from '../tokens/space'
import { color } from '../tokens/color'

// The top margin is what sets one block apart from the next: in the
// collapsed rail the caption is hidden, so this gap is all that is left
// to say where a section starts.
export const navSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[1],
  marginTop: space[5]
}

export const navSectionLabelStyle = {
  padding: `0 ${space[3]} ${space[1]}`,
  color: color.text.muted,
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em'
}
