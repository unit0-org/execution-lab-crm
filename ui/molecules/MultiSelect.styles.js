import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const triggerStyle = {
  display: 'inline-flex', alignItems: 'center', gap: space[2],
  justifyContent: 'space-between', minWidth: '180px', maxWidth: '260px',
  padding: `${space[2]} ${space[3]}`, font: 'inherit',
  color: color.text.primary, background: color.bg.sunken,
  border: `1px solid ${color.border.default}`, borderRadius: radius.md,
  cursor: 'pointer'
}

export const valueStyle = {
  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
}

export const chevronStyle = {
  display: 'inline-flex', flexShrink: 0, color: color.text.muted
}
