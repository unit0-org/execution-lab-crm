import { space } from './tokens/space'
import { radius } from './tokens/radius'

export const colorRadioStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: space[1],
  cursor: 'pointer',
  padding: `${space[1]} ${space[2]}`,
  borderRadius: radius.sm,
}
