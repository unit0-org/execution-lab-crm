import { Form } from '@/ui/Form'
import { Field } from '@/ui/Field'
import { Input } from '@/ui/Input'
import { SubmitButton } from '@/ui/SubmitButton'
import { addResource } from '../actions'

export function AddResourceForm({ contactId }) {
  return (
    <Form action={addResource}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Field htmlFor="url" label="URL">
        <Input id="url" name="url" type="url" required />
      </Field>
      <Field htmlFor="label" label="Label (optional)">
        <Input id="label" name="label" />
      </Field>
      <Field htmlFor="note" label="Note (optional)">
        <Input id="note" name="note" />
      </Field>
      <SubmitButton tone="primary" size="sm">Add resource</SubmitButton>
    </Form>
  )
}
