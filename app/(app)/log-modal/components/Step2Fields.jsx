import { Field } from '@/ui/Field'
import { Textarea } from '@/ui/Textarea'
import { ContactPicker } from './ContactPicker'
import { TypeField } from './TypeField'

export function Step2Fields({ contactId, setContactId, type, setType, notes, setNotes }) {
  return (
    <>
      <ContactPicker value={contactId} onChange={(e) => setContactId(e.target.value)} />
      <TypeField value={type} onChange={(e) => setType(e.target.value)} />
      <Field htmlFor="notes" label="Notes">
        <Textarea id="notes" rows={5} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </Field>
    </>
  )
}
