'use client'

import { useRef } from 'react'
import { useToggle } from './useToggle'
import { useOutsideClose } from './useOutsideClose'
import { LABEL_COLOR_KEYS } from '../tokens/labelColors'
import { SwatchTrigger } from './SwatchTrigger'
import { SwatchMenu } from './SwatchMenu'
import { wrapStyle } from './SwatchSelect.styles'

// A compact color picker: a current-color trigger that opens a swatch menu.
export function SwatchSelect({ value, onPick, options = LABEL_COLOR_KEYS }) {
  const ref = useRef(null)
  const pop = useToggle()
  useOutsideClose(ref, pop.hide, pop.open)
  const choose = (key) => { onPick(key); pop.hide() }

  return (
    <span ref={ref} style={wrapStyle}>
      <SwatchTrigger value={value} onClick={pop.toggle} />
      <SwatchMenu open={pop.open} anchor={ref} options={options}
        value={value} onPick={choose} />
    </span>
  )
}
