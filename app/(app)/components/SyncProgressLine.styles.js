import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'

export const lineStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: space[2],
  paddingLeft: space[3],
  fontSize: 11,
  color: color.text.muted,
  fontVariantNumeric: 'tabular-nums',
}

export const partStyle = { whiteSpace: 'nowrap' }

export const phaseStyle = {
  paddingLeft: space[3],
  fontSize: 11,
  color: color.text.muted,
  fontStyle: 'italic',
}
