import { trackStyle, fillStyle } from './ProgressBar.styles'

// Indeterminate progress: a fill that sweeps across the track.
export function ProgressBar() {
  return (
    <div style={trackStyle} role="progressbar" aria-label="Working">
      <div style={fillStyle} />
    </div>
  )
}
