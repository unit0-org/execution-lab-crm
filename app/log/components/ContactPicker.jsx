'use client'

import { Field } from '@/ui/Field'
import { Select } from '@/ui/Select'
import { useContacts } from '@/app/contacts/hooks/useContacts'
import { ContactOption } from './ContactOption'

export function ContactPicker() {
  const { contacts } = useContacts()

  return (
    <Field htmlFor="contact_id" label="Contact">
      <Select id="contact_id" name="contact_id" required defaultValue="">
        <option value="" disabled>Choose a contact…</option>
        {contacts.map((c) => <ContactOption key={c.id} contact={c} />)}
      </Select>
    </Field>
  )
}
