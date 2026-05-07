import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'

export const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1.25rem 1fr auto',
  gap: space[3],
  padding: `${space[2]} 0`,
  borderBottom: `1px solid ${color.border.soft}`,
  alignItems: 'center',
}
