import { trackStyle, fillStyle } from './ProgressBar.styles'
import { progressShare } from './progressShare'

/**
 * Progress: a fill sweeping across a track while something works, or — given
 * `value` and `total` — filled to how much of it is done, so a batch shows
 * how far along it is instead of only that it is busy.
 */
export function ProgressBar({ value, total }) {
  const share = progressShare(value, total)

  return (
    <div style={trackStyle} role="progressbar" aria-label="Working"
      aria-valuenow={value} aria-valuemax={total}>
      <div style={fillStyle(share)} />
    </div>
  )
}
