import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'
import { radius } from '@/ui/tokens/radius'
import { font, fontSize, lineHeight } from '@/ui/tokens/typography'

export const briefingStyle = {
  padding: `${space[4]} ${space[5]}`,
  borderRadius: radius.lg,
  background: color.bg.surface,
  border: `1px solid ${color.border.default}`,
  fontFamily: font.serif,
  fontSize: fontSize.lg,
  lineHeight: lineHeight.relaxed,
  color: color.text.primary,
}
