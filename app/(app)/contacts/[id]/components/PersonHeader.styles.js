import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'

export const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[3],
  paddingBottom: space[6],
  marginBottom: space[6],
  borderBottom: `1px solid ${color.border.default}`,
}
