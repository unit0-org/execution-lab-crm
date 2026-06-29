'use client'

import { SliderTicks } from './SliderTicks'
import { wrapStyle, railStyle, rangeStyle } from './Slider.styles'

// A discrete slider over an ordered `options` list. The thumb snaps to each
// stop; `onChange` receives the picked option (not the DOM event).
export function Slider({ options, value, onChange, ...rest }) {
  const max = options.length - 1
  const index = Math.max(0, options.indexOf(value))
  const pick = (event) => onChange(options[Number(event.target.value)])

  return (
    <span style={wrapStyle}>
      <span style={railStyle} />
      <SliderTicks count={options.length} active={index} />
      <input type="range" min={0} max={max} step={1} value={index}
        onChange={pick} className="slider" style={rangeStyle} {...rest} />
    </span>
  )
}
