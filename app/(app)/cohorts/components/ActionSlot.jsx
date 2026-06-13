import { actionSlotStyle } from './ActionSlot.styles'

// Reserves a consistent control-height cell so rows with a menu and rows
// without one stay the same height.
export function ActionSlot({ children }) {
  return <div style={actionSlotStyle}>{children}</div>
}
