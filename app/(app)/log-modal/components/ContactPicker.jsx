'use client'

import { Field } from '@/ui/Field'
import { Select } from '@/ui/Select'
import { useContacts } from '../../contacts/hooks/useContacts'

export function ContactPicker({ value, onChange }) {
  const { contacts } = useContacts()
  return (
    <Field htmlFor="contact_id" label="Contact">
      <Select id="contact_id" name="contact_id" value={value} onChange={onChange} required>
        <option value="" disabled>Choose a contact…</option>
        {contacts.map((c) => (
          <option key={c.id} value={c.id}>{c.display_name || c.id.slice(0, 8)}</option>
        ))}
      </Select>
    </Field>
  )
}
