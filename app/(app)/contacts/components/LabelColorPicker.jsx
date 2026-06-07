import { Inline } from '@/ui/layout/Inline'
import { ColorSwatch } from '@/ui/atoms/ColorSwatch'
import { LABEL_COLOR_KEYS } from '@/ui/tokens/labelColors'

// A row of color swatches for choosing a label's color.
export function LabelColorPicker({ value, onPick }) {
  return (
    <Inline gap="sm">
      {LABEL_COLOR_KEYS.map((key) => (
        <ColorSwatch key={key} color={key} active={key === value}
          onPick={onPick} />
      ))}
    </Inline>
  )
}
