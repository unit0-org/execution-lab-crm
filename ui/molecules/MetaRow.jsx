import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { rowStyle, valueStyle } from './MetaRow.styles'

/** Label/value detail row with a bottom rule (order summary). */
export function MetaRow({ label, value }) {
  return (
    <div style={rowStyle}>
      <MonoLabel size={11}>{label}</MonoLabel>
      <span style={valueStyle}>{value}</span>
    </div>
  )
}
