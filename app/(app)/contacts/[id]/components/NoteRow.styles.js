import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'
import { radius } from '@/ui/tokens/radius'

export const rowStyle = {
  padding: space[3],
  borderRadius: radius.md,
  background: color.bg.surface,
  border: `1px solid ${color.border.soft}`,
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
}

export const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}
