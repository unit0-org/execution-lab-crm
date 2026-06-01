import { scrimStyle } from './Scrim.styles'

// Mobile backdrop behind the open sidebar drawer; tap to close.
export function Scrim({ open, onClick }) {
  const shown = open || undefined

  return (
    <div data-scrim data-open={shown} onClick={onClick} style={scrimStyle} />
  )
}
