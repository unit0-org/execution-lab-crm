import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'

export const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1.5rem 1fr auto',
  gap: space[3],
  padding: `${space[3]} 0`,
  borderBottom: `1px solid ${color.border.soft}`,
}

export const titleStyle = { color: color.text.primary }
export const bodyStyle  = { color: color.text.muted, marginTop: '0.25rem', whiteSpace: 'pre-wrap' }
