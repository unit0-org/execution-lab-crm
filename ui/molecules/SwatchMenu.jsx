'use client'

import { Inline } from '../layout/Inline'
import { ColorSwatch } from '../atoms/ColorSwatch'
import { useAnchorRect } from './useAnchorRect'
import { menuStyle } from './SwatchSelect.styles'

// The swatch grid, fixed-positioned under its anchor so the table's
// horizontal-scroll wrapper can't clip it.
export function SwatchMenu({ open, anchor, options, value, onPick }) {
  const rect = useAnchorRect(anchor, open)

  if (!open || !rect) return null

  return (
    <div style={menuStyle(rect)}>
      <Inline gap="sm">
        {options.map((key) => (
          <ColorSwatch key={key} color={key} active={key === value}
            onPick={onPick} />
        ))}
      </Inline>
    </div>
  )
}
