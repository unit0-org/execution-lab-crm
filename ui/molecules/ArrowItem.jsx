import { Text } from '@/ui/atoms/Text'
import { rowStyle, arrowStyle } from './ArrowItem.styles'

// A "→ text" step line (what-happens-next lists).
export function ArrowItem({ children }) {
  return (
    <div style={rowStyle}>
      <span style={arrowStyle}>→</span>
      <Text tone="muted" size="sm">{children}</Text>
    </div>
  )
}
