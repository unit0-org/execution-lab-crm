import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'

export const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: space[3],
  padding: `${space[3]} 0`,
  borderBottom: `1px solid ${color.border.soft}`,
  alignItems: 'center',
}

export const reasonStyle = { color: color.text.muted, fontSize: '0.85rem', marginTop: '0.125rem' }
