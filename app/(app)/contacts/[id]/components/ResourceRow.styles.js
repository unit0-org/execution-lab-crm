import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'

export const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1.25rem 1fr auto',
  gap: space[2],
  padding: `${space[2]} 0`,
  borderBottom: `1px solid ${color.border.soft}`,
  alignItems: 'start',
}

export const linkStyle = { color: color.text.primary, textDecoration: 'none', wordBreak: 'break-word' }
export const noteStyle = { color: color.text.muted, fontSize: '0.85rem', marginTop: '0.125rem' }
