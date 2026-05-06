import { Field } from '@/ui/Field'
import { Input } from '@/ui/Input'

export function TitleField() {
  return (
    <Field htmlFor="title" label="Title (optional)">
      <Input id="title" name="title" type="text" />
    </Field>
  )
}
