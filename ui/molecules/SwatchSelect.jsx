'use client'

import { Popover } from './Popover'
import { Inline } from '../layout/Inline'
import { ColorSwatch } from '../atoms/ColorSwatch'
import { useToggle } from './useToggle'
import { LABEL_COLOR_KEYS } from '../tokens/labelColors'
import { SwatchTrigger } from './SwatchTrigger'

// A compact color picker: a current-color trigger that opens a swatch menu.
export function SwatchSelect({ value, onPick, options = LABEL_COLOR_KEYS }) {
  const pop = useToggle()
  const choose = (key) => { onPick(key); pop.hide() }
  const trigger = <SwatchTrigger value={value} onClick={pop.toggle} />

  return (
    <Popover open={pop.open} onClose={pop.hide} trigger={trigger}>
      <Inline gap="sm">
        {options.map((key) => (
          <ColorSwatch key={key} color={key} active={key === value}
            onPick={choose} />
        ))}
      </Inline>
    </Popover>
  )
}
