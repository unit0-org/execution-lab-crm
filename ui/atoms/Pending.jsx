import { Spinner } from './Spinner'
import { wrapStyle, labelStyle, spinnerSlotStyle } from './Pending.styles'

/**
 * Keeps size while showing a spinner (used by `SubmitButton`): centers it
 * over the label while keeping the label's footprint, so a button keeps
 * its size between idle and pending (no CLS).
 */
export function Pending({ children }) {
  return (
    <span style={wrapStyle}>
      <span style={labelStyle}>{children}</span>
      <span style={spinnerSlotStyle}><Spinner size={12} /></span>
    </span>
  )
}
