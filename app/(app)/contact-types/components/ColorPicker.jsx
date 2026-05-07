import { Field } from '@/ui/Field'
import { Inline } from '@/ui/Inline'
import { CONTACT_TYPE_COLORS, DEFAULT_CONTACT_TYPE_COLOR } from '@/lib/contact_types/colors'
import { ColorOption } from './ColorOption'

export function ColorPicker() {
  return (
    <Field label="Color">
      <Inline gap="sm">
        {CONTACT_TYPE_COLORS.map((c) => (
          <ColorOption key={c} color={c} checked={c === DEFAULT_CONTACT_TYPE_COLOR} />
        ))}
      </Inline>
    </Field>
  )
}
