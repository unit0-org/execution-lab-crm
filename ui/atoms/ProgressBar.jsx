import { trackStyle, fillStyle } from './ProgressBar.styles'

/** Indeterminate top-of-page progress: a fill sweeping across a track. */
export function ProgressBar() {
  return (
    <div style={trackStyle} role="progressbar" aria-label="Working">
      <div style={fillStyle} />
    </div>
  )
}
