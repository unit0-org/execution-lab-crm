import { statusColors } from '@/ui/tokens/statusColors'

// The success check reserves its space always (opacity toggles) so nothing
// shifts when it fades in and out.
export const savedCheckStyle = (show) => ({
  display: 'inline-flex',
  verticalAlign: 'middle',
  color: statusColors.successText,
  opacity: show ? 1 : 0,
  transition: 'opacity 150ms ease'
})
