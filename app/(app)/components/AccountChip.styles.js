import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'
import { radius } from '@/ui/tokens/radius'
import { fontSize } from '@/ui/tokens/typography'

export const chipStyle = {
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

export const dotStyle = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: color.accent.solid,
  flexShrink: 0,
}
