import { Field } from '@/ui/Field'
import { Textarea } from '@/ui/Textarea'

export function BodyField() {
  return (
    <Field htmlFor="body" label="Notes (optional)">
      <Textarea id="body" name="body" rows={5} />
    </Field>
  )
}
