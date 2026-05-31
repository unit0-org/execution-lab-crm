import { space } from '../tokens/space'
import { radius } from '../tokens/radius'

// Matches TextField's box (padding + 1px border) so display↔edit is shiftless.
export const editableTextStyle = {
  display: 'block',
  width: '100%',
  textAlign: 'left',
  padding: `${space[2]} ${space[3]}`,
  border: '1px solid transparent',
  borderRadius: radius.sm,
  background: 'none',
  font: 'inherit',
  cursor: 'pointer'
}
