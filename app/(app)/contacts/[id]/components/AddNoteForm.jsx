import { Form } from '@/ui/Form'
import { Field } from '@/ui/Field'
import { Textarea } from '@/ui/Textarea'
import { SubmitButton } from '@/ui/SubmitButton'
import { Inline } from '@/ui/Inline'
import { addNote } from '../actions'

export function AddNoteForm({ contactId }) {
  return (
    <Form action={addNote}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Field htmlFor="body" label="Note">
        <Textarea id="body" name="body" rows={3} required />
      </Field>
      <Inline gap="md" align="center">
        <label><input type="checkbox" name="pinned" /> Pin</label>
        <SubmitButton tone="primary" size="sm">Add note</SubmitButton>
      </Inline>
    </Form>
  )
}
