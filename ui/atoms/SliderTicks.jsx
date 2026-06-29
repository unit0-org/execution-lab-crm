import { ticksStyle, dotStyle } from './Slider.styles'

// The discrete stops drawn behind the range track; the active stop is lit.
export function SliderTicks({ count, active }) {
  const dots = Array.from({ length: count })

  return (
    <span style={ticksStyle}>
      {dots.map((_, i) => (
        <span key={i} style={dotStyle(i === active)} />
      ))}
    </span>
  )
}
