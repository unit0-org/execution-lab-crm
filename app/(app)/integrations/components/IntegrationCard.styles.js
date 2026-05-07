import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'
import { radius } from '@/ui/tokens/radius'

export const cardStyle = {
  padding: space[4],
  borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  background: color.bg.surface,
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
}

export const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}
