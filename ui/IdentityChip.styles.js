import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { fontSize } from './tokens/typography'

export const identityChipStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: space[2],
  padding: `${space[1]} ${space[2]}`,
  borderRadius: radius.sm,
  fontSize: fontSize.xs,
  color: color.text.muted,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

export const identityDotStyle = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: color.accent.solid,
  flexShrink: 0,
}
