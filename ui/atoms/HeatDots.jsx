import { dotsStyle, dotStyle } from './HeatDots.styles'

const DOTS = [0, 1, 2, 3, 4]

/** Dot-scale rating indicator: 0–5 shown as filled / empty dots. */
export function HeatDots({ rating = 0 }) {
  return (
    <span style={dotsStyle} aria-label={`Heat ${rating} of 5`}>
      {DOTS.map((i) => <span key={i} style={dotStyle(i < rating)} />)}
    </span>
  )
}
