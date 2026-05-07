import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'
import { fontSize, fontWeight } from '@/ui/tokens/typography'

export const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
}

export const labelStyle = {
  padding: `0 ${space[3]}`,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  color: color.text.subtle,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
}
