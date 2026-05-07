import { Field } from '@/ui/Field'
import { Inline } from '@/ui/Inline'
import { LABEL_COLORS, DEFAULT_LABEL_COLOR } from '@/lib/labels/colors'
import { ColorOption } from './ColorOption'

export function ColorPicker() {
  return (
    <Field label="Color">
      <Inline gap="sm">
        {LABEL_COLORS.map((c) => (
          <ColorOption key={c} color={c} checked={c === DEFAULT_LABEL_COLOR} />
        ))}
      </Inline>
    </Field>
  )
}
